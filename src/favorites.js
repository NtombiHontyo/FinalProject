import {createElement, getLocalStorage} from './utils';

function favouriteListTemplate(propertyd) {
    return `
    <li class="property-card">
             <a href="#/propertyDetails?id=${propertyd.id}">
               <img
                 src="${propertyd.images.small}"
                 alt="image of ${propertyd.smallDesc}"
               />
               <div>
                   <h2 class="property_price">R${propertyd.price.toLocaleString('en-US').replace(/,/g, ' ')}</h2>
                   <h3 class="small_desc">${propertyd.smallDesc}</h3>
                   <p class="suburb">${propertyd.suburb}</p>
               </div>
               </a>
           </li>
   `;
}

async function favouriteList() {
    const title = createElement("h2", {textContent: "My favourites"})

    const favItems = getLocalStorage("favourites");
    const htmlItems = favItems.map((item) => favouriteListTemplate(item)); 

    const unorderedList = createElement("ul", {className: "favouritelist", innerHTML: htmlItems.join("")} )
    console.log(favItems)

    return createElement("section",{}, [title, unorderedList])
}

export default favouriteList;