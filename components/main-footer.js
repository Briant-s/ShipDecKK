class Footer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/components/footer.css">
        <div class="footer-wrapper">
            <div class="main-footer">
                <div class="link-row">
                    <div class="link-column" id="company-info">
                        <h6 class="title">Company Info</h6>
                        <h5 id="company-name">ShipDecKK</h5>
                        <h6>A trusted ship dealership offering premium vessels and maritime services worldwide</h6>
                    </div>
                    <div class="link-column" id="quick-links">
                        <h6 class="title">Quick Links</h6>
                        <div class="web-links">
                            <a href="/index.html" class="page-links">Home</a>
                            <a href="/gallery/gallery.html" class="page-links">Gallery</a>
                            <a href="/services/services.html" class="page-links">Services</a>
                            <a href="/about-us/about-us.html" class="page-links">About Us</a>
                            <a href="/subscription/subscribe.html" class="page-links">Subscription</a>
                        </div>
                    </div>
                    <div class="link-column" id="contact-info">
                        <h6 class="title">Contact Info</h6>
                        <h6>Menara Astra, Jl. Jend. Sudirman No.5 Jakarta Pusat 10220, Indonesia</h6>
                        <div id="contact">
                            <span class="material-symbols-outlined">call</span>
                            <a href="" class="page-links">+1-234-567-8901</a>
                        </div>
                    </div>
                </div>
                <hr class="solid">
                <div class="info-row">
                    <h3>ShipDecKK</h3>
                    <h6 id="copyright">© 2020-2025 ShipDecKK. All rights reserved.</h6>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('main-footer', Footer);