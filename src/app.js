import { createElement } from "./utils";
import { initRouter } from "./router";


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
    const heart = createElement("span", { 
        textContent: "0 ",
        className: "wishlistNumber"
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

    return createElement("div", {}, [Header(main), main, Footer()]);
}