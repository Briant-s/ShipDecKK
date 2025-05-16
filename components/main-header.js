class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/components/header.css"/>
        <div class="main-header">
            <div class="logo">
                <h1>ShipDecKK</h1>
            </div>
            <div class="menu-items">
                <a href="" class="header-link">Gallery</a>
                <a href="" class="header-link">Services</a>
                <a href="" class="header-link">About Us</a>
                <a href="" class="sub-button">Subscribe</a>
            </div>
            <button id="header-button">
                <span class="material-symbols-outlined">menu</span>
            </button>
        </div>
        <div class="header-sidebar" id="header-menu" style="display: none;">
            <button id="close-button">
                <span class="material-symbols-outlined">close</span>
            </button>
            <div class="sidebar-actions">
                <a href=""><p class="sidebar-text">Gallery</p></a>
                <a href=""><p class="sidebar-text">Services</p></a>
                <a href=""><p class="sidebar-text">About Us</p></a>
                <a href="" class="sub-button">Subscribe</a>
            </div>
        </div>
        `;
        const openBtn = this.shadowRoot.getElementById("header-button");
        const closeBtn = this.shadowRoot.getElementById("close-button");
        const sidebar = this.shadowRoot.getElementById("header-menu");

        openBtn.addEventListener("click", () => {
            sidebar.style.display = "flex";
        });

        closeBtn.addEventListener("click", () => {
            sidebar.style.display = "none";
        });
    }
}

customElements.define('main-header', Header);