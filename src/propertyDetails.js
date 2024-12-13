import { createElement,  getParams} from "./utils";
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
            <div class="heartwish"><button>🩶</button></div>
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
                <button>Contact Agent</button>
            </div>
        </section>
        <section class="detail-card bond">
            <div>
                <h3>Bond Calculator</h3>
                <p>Purchase Price: <span></span></p>
                <p>Deposit(Optional) : <span></span></p>
                <p>Interest Rate: <span></span></p>
                <p>Loan Term: <span></span></p>
            </div>
            <div>
                <p>Monthly Payment: <span></span></p>
                <p>Total Once-off Costs: <span></span> </p>
                <p>Min Gross Monthly Income:  <span></span></p>
            </div>
        </section>
    `
}

async function propertDetails() {
    const onePropertyId = getParams("id")
    const onePropertyData = await getDataDetails(onePropertyId);
    console.log(onePropertyData);
    console.log(onePropertyData[0].id)
    
    const house = onePropertyData[0];
    const detailsTemp = propertyDetailsTemplate(house)
    return createElement("div", {innerHTML: detailsTemp})
}

export default propertDetails