import { createElement,  getParams, setLocalStorage, getLocalStorage} from "./utils";
import getDataDetails from "./dataOne";




function propertyDetailsTemplate(house) {
    return `
        <div class="slider">
            <div class="slides">
                <img class="slide" src="${house.images.large1}" alt="${house.smallDesc}">
                <img class="slide" src="${house.images.large2}" alt="${house.smallDesc}">
                <img class="slide" src="${house.images.large3}" alt="${house.smallDesc}">
                <img class="slide" src="${house.images.large4}" alt="${house.smallDesc}">
            </div>    
        </div>
        <section class="detail-card top-desc">
            <div>
                <h2>R${house.price.toLocaleString('en-US').replace(/,/g, ' ')}</h2>
                <h3>${house.smallDesc}</h3>
                <h3>${house.suburb}</h3>
            </div>
            <div class="heartwish"><button id="addToFav" data-id="${house.id}">🩶</button></div>
        </section>
        <div class="detail-card">
            <p>${house.desc}</p>
        </div>
        <section class="detail-card estate">
            <div>
                <h3>Other Details:</h3>
                <h4>Size: ${house.size}</h4>
                <h4>Listing Date: ${house.listingDate}</h4>
            </div>
            <div>
                <h3>Agent Details:</h3>
                <h4>Company: ${house.estateAgent.Company} </h4>
                <h4>Agent: ${house.estateAgent.Estate_Agent_Name}</h4>
                <h4>Number: ${house.estateAgent.Contact_info}</h4>
                <button><a href="#/form">Contact Agent</a></button>
            </div>
        </section>
        <section class="detail-card bond">
        <h3>Bond Calculator</h3>
            <div>
                <p>Purchase Price: <span><input type="number" name="price" id="price" class="underline" value=${house.price}></span></p>
                <p>Deposit(Optional) : <span><input type="number" name="depo" id="depo" class="underline" value=0></span></p>
                <p>Interest Rate: <span><input type="number" name="interest" id="rate" class="underline" ></span></p>
                <p>Loan Term: <span><input type="number" name="term" id="term" class="underline" ></span></p>
                <button id="calculateAmounts" >Calculate</button>
            </div>
            <div>
                <p>Monthly Payment: <strong>R<span id="payment"></span></strong></p>
                <p>Total Once-off Costs: <strong>R<span id="once-off"></span></strong> </p>
                <p>Min Gross Monthly Income: <strong>R<span id="income"></span></strong></p>
            </div>
        </section>
    `
}



async function propertDetails() {
    const onePropertyId = getParams("id")
    const onePropertyData = await getDataDetails(onePropertyId);
    
    
    const house = onePropertyData[0];
    const detailsTemp = propertyDetailsTemplate(house)

    

    return createElement("div", {innerHTML: detailsTemp})
    
}

export default propertDetails