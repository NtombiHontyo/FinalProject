import {createElement, getParams, renderListWithTemplate} from './utils';
import getData from './data';

function propertyCardTemplate(propertyd){
    
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
 

 async function PropertyList() {
    const suburb = getParams("suburb")
    const propertyDatailList = await getData(suburb)
     let list = []
     list.push(propertyDatailList)
     
     
     const propertyList = list[0].map(property => 
        propertyCardTemplate(property)   
    )

  
    // console.log(propertyList)
    const unorderedList = createElement("ul", {innerHTML: propertyList.join(""), className: "listul"});

    return createElement("div", {}, [unorderedList]);
    
}

export default PropertyList;