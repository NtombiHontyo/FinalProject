import { createElement, getParams } from "./utils";
import Page1 from "./page1";
import Counter from "./Counter";
import Page3 from "./page3";
import PropertyList from "./propertylist";
import propertDetails from "./propertyDetails";
import getDataDetails from "./dataOne";
import favouriteList from "./favorites";

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
            carousel()
            break;

            case "#/favourites": 
            updateView(favouriteList());
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