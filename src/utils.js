export function createElement(type, props = {}, children = []) {
    const element = document.createElement(type);

    //props: {textContent: "Hello World", id: "header1", data-productId: 123, ....}
    Object.entries(props).forEach(([key, value]) => {
        if(~key.indexOf("-")) {
            element.setAttribute(key, value); //data attributes
        } else {
            element[key] = value;
        }
    })

    children.forEach((child) => {
        element.appendChild(child);
    })

    return element
}
export function getParams(paramName) {
    const hash = window.location.hash; // "#/propertylist?suburb=Cambridge"
    const query = hash.split('?')[1];
    const urlParams = new URLSearchParams(query);
    const suburbName = urlParams.get(paramName);
  
    return suburbName;
}

export function renderListWithTemplate(
    templateFn,
    parentElement,
    list,
    position = "afterBegin",
    clear = false,
  ) {
    if (clear) {
      parentElement.innerHTML = "";
    }
    const htmlStrings = list.map(templateFn);
    parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
  }

  // retrieve data from localstorage
export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  // save data to local storage
  export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

