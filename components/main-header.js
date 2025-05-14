class Header extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: "open"});
    }
    connectedCallback(){
        this.shadowRoot.innerHTML = `
        
        
        
        `;
    }
}

customElements.define('main-header', Header);