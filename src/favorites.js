import {createElement} from './utils';
function favouriteList() {
    const title = createElement("h2", {textContent: "My favourites"})

    const unorderedList = createElement("ul", {className: "favouritelist"})

    return createElement("section",{}, [title, unorderedList])
}

export default favouriteList;