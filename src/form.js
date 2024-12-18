import {createElement} from './utils';
function formTemplate() {
    return `<div class="input-wrapper">
            <i class="fa-solid fa-user"></i>
            <input type="text" placeholder="Your Name" required class="agentForm">
        </div>
        <div class="input-wrapper">
            <i class="fa fa-envelope"></i>
            <input type="email" placeholder="Your Email" required class="agentForm">
        </div>
        <div class="input-wrapper">
            <i class="fa-solid fa-phone"></i>
            <input type="text" placeholder="Your Mobile Number" required class="agentForm">
        </div>
        <div class="input-wrapper">
            <textarea name="" id="" placeholder="Your Message Here"></textarea>
        </div>
        <div class="input-wrapper">
            <button>Send To Agent</button>
        </div>`
}

function form() {
    const title = createElement("h2", {textContent: "Contact Agent"})

    const formDiv = createElement("div", {className: "forminputs", innerHTML: formTemplate()})

    return createElement("div",{}, [title, formDiv])
}

export default form;