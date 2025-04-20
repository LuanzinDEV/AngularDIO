class CardNews extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"})
        shadow.innerHTML = "<h3>Hello Word<h3>"
    }
}

customElements.define('card-news', CardNews)