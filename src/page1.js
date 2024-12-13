import {createElement} from './utils';
import getData from './data'
function Page1() {
    // getData();
    const banner = createElement("img", {
        src: "https://raw.githubusercontent.com/NtombiHontyo/images/refs/heads/main/blake.webp", 
        alt: "banner",
    className: "banner"})

    const paragraph = createElement("p", {
        textContent: "Property for sale in East London, South Africa, offers a unique blend of affordability and charm, making it an appealing destination for prospective homeowners. Nestled along the scenic Eastern Cape coastline, the city boasts a mix of stunning beachfront properties, cozy suburban homes, and stylish apartments, all set against a backdrop of natural beauty. Despite its picturesque setting and high quality of life, property prices in East London remain surprisingly reasonable compared to other coastal cities in the country. This balance of beauty and affordability makes East London an ideal choice for families, retirees, and investors looking for value and tranquility in their real estate investments.",
        className: "home-para"
    })
    const cards = `<ul class="product-grid">
          <li>
            <a href="/#/propertylist?suburb=Cambridge"
              ><img
                src="https://raw.githubusercontent.com/NtombiHontyo/images/main/cambridge.png"
                alt="Cambridge"
              />
              <h2>Cambridge</h2>
            </a>
          </li>
          <li>
            <a href="/#/propertylist?suburb=Beacon-Bay"
              ><img
                src="https://raw.githubusercontent.com/NtombiHontyo/images/main/beaconBay.jpg"
                alt="Beacon-Bay"
              />
              <h2>Beacon Bay</h2>
            </a>
          </li>
           <li>
            <a href="/#/propertylist?suburb=Nahoon"
              ><img
                src="https://raw.githubusercontent.com/NtombiHontyo/images/main/nahoon.jpg"
                alt="Nahoon"
              />
              <h2>Nahoon</h2>
            </a>
          </li>
           <li>
            <a href="/#/propertylist?suburb=Gonubie"
              ><img
                src="https://raw.githubusercontent.com/NtombiHontyo/images/main/gonubie.jpg"
                alt="Gonubie"
              />
              <h2>Gonubie</h2>
            </a>
          </li>
        </ul>`
    const sectionCard = createElement("section", {innerHTML: cards})
    
    // const page3Link = createElement("a", {href: "/#/page3", textContent: "Link to Page 3"})

    return createElement("div",{}, [banner, paragraph, sectionCard])

}

export default Page1;