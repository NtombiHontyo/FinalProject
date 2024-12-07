import { createElement } from "./utils";
import Page1 from "./page1";
import Counter from "./Counter";
import Page3 from "./page3";

export function initRouter(mainView) {
    function updateView(newView) {
        mainView.innerHTML = "";
        mainView.appendChild(newView)
    };

    function hashToROute(hash) {
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