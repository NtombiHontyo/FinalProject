import {createElement, getLocalStorage} from './utils';

function favouriteListTemplate(propertyd) {
    return `
    <li class="property-card favs">
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
    
  if (favItems &&favItems.length > 0) {
    const htmlItems = favItems.map((item) => favouriteListTemplate(item)); 

    const unorderedList = createElement("ul", {className: "favouritelist", innerHTML: htmlItems.join("")} )
    

    return createElement("section",{}, [title, unorderedList]) }
    else {
      const para = createElement("p", {textContent: "Your favourite list is empty"})
      return createElement("section", {}, [title, para])
    }
}

export default favouriteList;