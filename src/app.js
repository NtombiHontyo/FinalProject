import { createElement } from "./utils";
import { Counter } from "./Counter";

export function App() {
    const header= createElement("h1", {textContent: "My Cool Project", className: "heading"}) ;

    const main = createElement("main", {}, [Counter()])

    return createElement("div", {}, [header, main]);
}