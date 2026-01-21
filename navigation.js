class CustomNavigation extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    background-color: #000;
                    color: white;
                    position: fixed;
                    width: 100%;
                    top: 0;
                    z-index: 1000;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
                }
                .nav-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1rem 2rem;
                }
                .logo {
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 900;
                    font-size: 1.5rem;
                    text-transform: uppercase;
                    color: white;
                    text-decoration: none;
                }
                .logo span {
                    color: #c8102e;
                }
                .nav-links {
                    display: flex;
                    gap: 2rem;
                }
                .nav-links a {
                    color: white;
                    text-decoration: none;
                    font-weight: bold;
                    text-transform: uppercase;
                    font-size: 0.9rem;
                    letter-spacing: 1px;
                    transition: color 0.3s;
                }
                .nav-links a:hover {
                    color: #c8102e;
                }
                .mobile-menu-button {
                    display: none;
                    background: none;
                    border: none;
                    color: white;
                    font-size: 1.5rem;
                    cursor: pointer;
                }
                .mobile-menu {
                    display: none;
                    flex-direction: column;
                    background: #000;
                    padding: 1rem;
                    position: absolute;
                    width: 100%;
                    left: 0;
                    top: 100%;
                }
                .mobile-menu a {
                    color: white;
                    text-decoration: none;
                    padding: 0.5rem 0;
                    border-bottom: 1px solid #333;
                }
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                    .mobile-menu-button {
                        display: block;
                    }
                    .mobile-menu {
                        display: flex;
                    }
                }
            </style>
            <nav>
                <div class="nav-container">
                    <a href="#" class="logo">PILLAR<span>&</span>PEW</a>
                    <div class="nav-links">
                        <a href="#">Home</a>
                        <a href="#about">About</a>
                        <a href="#articles">Articles</a>
                        <a href="#submit">Submit</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <button class="mobile-menu-button">
                        <i data-feather="menu"></i>
                    </button>
                    <div class="mobile-menu hidden">
                        <a href="#">Home</a>
                        <a href="#about">About</a>
                        <a href="#articles">Articles</a>
                        <a href="#submit">Submit</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </nav>
        `;
    }
}
customElements.define('custom-navigation', CustomNavigation);