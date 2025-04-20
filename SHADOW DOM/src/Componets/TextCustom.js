class TextCustom extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"})

        // text 

        const componentRoot = document.createElement("h1")
        componentRoot.textContent = this.getAttribute("titulo")

        // style

        const style = document.createElement("style")

        style.textContent = `
            h1{
                color: red;
            }
        `

        // apply the ELEMENT to the component 

        shadow.appendChild(componentRoot)
        shadow.appendChild(style)

    }
}

customElements.define('text-custom', TextCustom)