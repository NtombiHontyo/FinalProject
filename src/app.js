import { createElement, getLocalStorage } from "./utils";
import { initRouter } from "./router";

// function countFavItems() {
//     const housesInFav = getLocalStorage("favourites");
//     const totalNoOfItem = housesInFav.length;
  
//     const numberInHtml = document.getElementsByClassName("wishlistNumber");
  
//     if (numberInHtml) {
//       return totalNoOfItem;
//     }
//   }

function Header(mainDiv) {
    const imageLogo = createElement("img", {
        src: "https://raw.githubusercontent.com/NtombiHontyo/images/main/el%20Prop.png", 
        alt: "image logo", 
        className: "img-logo"
    }); 
    const homePage = createElement("a", { href: "/#/page1"}, [imageLogo])
       
    const appTitle =  createElement("div", {}, 
        [homePage]);

    //nav Items
    let count = 0
    const housesInFav = getLocalStorage("favourites");
    
    if (housesInFav ) {
        const totalNoOfhouses = housesInFav.length;
        count = totalNoOfhouses
    } else {
        count = 0
    }
    const heart = createElement("span", { 
       
        className: "wishlistNumber",
        textContent: count
    });
    const wishList = createElement("a", {
        href: "/#/favourites", 
        textContent: "Wishlist: "
    }, [heart]);
    

    const nav = createElement("nav", {}, [wishList]);


    return createElement("header", {}, [appTitle, nav]);
}
function Footer() {
    const copyright = createElement("span", {innerHTML: `Copyright &copy; ${new Date().getFullYear()}`, className: "spanFooter"})
    return createElement("footer", {}, [copyright]);
}
export function App() {
    
    const main = createElement("main", {}, []);

    initRouter(main)
   
    // countFavItems()
    return createElement("div", {}, [Header(main), main, Footer()]);
}