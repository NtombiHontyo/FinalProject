import { createElement, getParams,setLocalStorage, getLocalStorage, alertMessage } from "./utils";
import Page1 from "./page1";
import Counter from "./Counter";
import Page3 from "./page3";
import PropertyList from "./propertylist";
import propertDetails from "./propertyDetails";
import getDataDetails from "./dataOne";
import favouriteList from "./favorites";
import form from "./form";
import { doc } from "prettier";



function carousel() {
    const slides = document.querySelectorAll(".slides img");
    let slideIndex = 0;
    let intervalId = null;

    initializeSlider();
   
    
    function initializeSlider() {
      if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 3000);
      }
      
    }
    function showSlide(index) {
      if (index >= slides.length) {
        slideIndex = 0
      } else if (index < 0) {
        slideIndex = slides.length - 1;
      }

      slides.forEach(slide => {
        slide.classList.remove("displaySlide");
      });
      slides[slideIndex].classList.add("displaySlide");
    }
    // function prevSlide() {
    //   clearInterval(intervalId);
    //   slideIndex--;
    //   showSlide(slideIndex)
    // }
    function nextSlide() {
      slideIndex++;
      showSlide(slideIndex);
    }
  }
  function countCartItems() {
    const housesInFav = getLocalStorage("favourites");
    const totalNoOfhouses = housesInFav.length;
  
    const numberInHtml = document.querySelector(".wishlistNumber");
  
    if (totalNoOfhouses > 0) {
      numberInHtml.innerHTML = totalNoOfhouses;
    } else numberInHtml.innerHTML = 0
  }

  async function addProductToCart(product) {
      setLocalStorage("favourites", product);
      alertMessage(`${product[0].smallDesc} added to Favourites!`);
  }
  
  async function addToCartHandler(e) {
      const productss = getLocalStorage("favourites")
        ? getLocalStorage("favourites")
        : [];
      const product = await getDataDetails(e.target.dataset.id);
      const prodWOArray = product[0]
      productss.push(prodWOArray);
      
      addProductToCart(productss);
      countCartItems()
    }

    function displayOnceOff(p) {
      const onceOff = document.querySelector("#once-off")
  
      return onceOff.innerHTML = (p / 15).toFixed(2);
  
  }
  
  function minumumGrossIncome(p) {
      const minGross = document.querySelector("#income")
  
      return minGross.innerHTML = (p / 35).toFixed(2)
  }
  // (p * (r(1 + r)**n) / ((1 + r)**n) - 1)
  function displayAmounts() {
    
      const monthly = document.querySelector("#payment")
      
      const price = document.querySelector("#price").value;
      const priceNumber = parseFloat(price)
      const depo = document.querySelector("#depo").value;
      const depoNumber = parseFloat(depo)
      const rate = document.querySelector("#rate").value;
      const rateNumber = parseFloat(rate);
      const term = document.querySelector("#term").value;
      const termNumber = parseFloat(term);
  
  
      const p = priceNumber - depoNumber;
      const r = (rateNumber) / (12 * 100);
      const n = termNumber * 12;
  
      const numa = r * (1 + r)**n;
      const deno = ((1 + r)**n) - 1;
  
      const monthlyRep = p * (numa / deno)
  
  
      const monthlyRepayment = monthlyRep;
      
  
      displayOnceOff(p)
      minumumGrossIncome(p)
  
      return monthly.innerHTML = monthlyRepayment.toFixed(2);
      
  } 

  async function alert() {
    alertMessage("Message Sent to Agents!")
  }
    


export function initRouter(mainView) {
    function updateView(newView) {
        mainView.innerHTML = "";
        mainView.appendChild(newView)
    };

    async function hashToROute(hash) {
        const id = getParams("id")
        switch (hash) {
            case "#/page1":
                updateView(Page1()); 
            break;

            case "#/page2": 
            updateView(Counter());
            break;

            case "#/page3": 
            updateView(Page3());
            break;

            case "#/propertylist?suburb=Cambridge": 
            updateView(await PropertyList());
            break;

            case "#/propertylist?suburb=Beacon-Bay": 
            updateView(await PropertyList());
            break;
            
            case "#/propertylist?suburb=Nahoon": 
            updateView(await PropertyList());
            break;

            case "#/propertylist?suburb=Gonubie": 
            updateView(await PropertyList());
            break;
            case `#/propertyDetails?id=${id}`: 
            updateView(await propertDetails());
            carousel();
            document.getElementById("calculateAmounts").addEventListener("click", displayAmounts)
         

            document
            .getElementById("addToFav")
            .addEventListener("click", addToCartHandler);
            // displayMonthRep();
            break;

            case "#/favourites": 
            updateView( await favouriteList());
            break;

            case "#/form": 
            updateView(await form());
            document.getElementById("sendToAgent").addEventListener("click", alert)
            break;

            default:
                updateView(createElement("h3", {textContent: "404 Page Not Found"} ))
        }
    }
    const defaultHash = window.location.hash || "#/page1";
    hashToROute(defaultHash);

    window.addEventListener("hashchange", (evt) => {
        const newUrl = new URL(evt.newURL);
        const hash = newUrl.hash;
        hashToROute(hash);
    })
}