class CustomNavigation extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="nav-wrapper">
                <div class="nav-container">
                    <a href="/" class="logo">PILLAR<span class="amp">&</span>PEW</a>
                    <div class="nav-links">
                        <a href="/">Home</a>
                        <a href="#about">About</a>
                        <a href="#articles">Articles</a>
                        <a href="#submit">Submit</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <button class="mobile-menu-button" id="mobile-menu-btn" aria-label="Toggle mobile menu">
                        <i data-feather="menu"></i>
                    </button>
                </div>
                <div class="mobile-menu hidden" id="mobile-menu">
                    <a href="/">Home</a>
                    <a href="#about">About</a>
                    <a href="#articles">Articles</a>
                    <a href="#submit">Submit</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>
            
            <style>
                .nav-wrapper {
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
                .logo .amp {
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
                    padding: 0.5rem;
                }
                .mobile-menu {
                    display: none;
                    flex-direction: column;
                    background: #000;
                    padding: 1rem 2rem;
                    border-top: 1px solid #333;
                }
                .mobile-menu.hidden {
                    display: none;
                }
                .mobile-menu a {
                    color: white;
                    text-decoration: none;
                    padding: 0.75rem 0;
                    border-bottom: 1px solid #333;
                    font-weight: bold;
                    text-transform: uppercase;
                    font-size: 0.9rem;
                    letter-spacing: 1px;
                    transition: color 0.3s;
                }
                .mobile-menu a:hover {
                    color: #c8102e;
                }
                .mobile-menu a:last-child {
                    border-bottom: none;
                }
                
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                    .mobile-menu-button {
                        display: block;
                    }
                }
                
                /* Add padding to body to account for fixed nav */
                body {
                    padding-top: 70px;
                }
            </style>
        `;
        
        // Mobile menu toggle functionality
        const mobileMenuBtn = this.querySelector('#mobile-menu-btn');
        const mobileMenu = this.querySelector('#mobile-menu');
        
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                
                // Update icon
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    const isOpen = !mobileMenu.classList.contains('hidden');
                    icon.setAttribute('data-feather', isOpen ? 'x' : 'menu');
                    if (window.feather) {
                        feather.replace();
                    }
                }
            });
            
            // Close menu when clicking a link
            const menuLinks = mobileMenu.querySelectorAll('a');
            menuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                    const icon = mobileMenuBtn.querySelector('i');
                    if (icon) {
                        icon.setAttribute('data-feather', 'menu');
                        if (window.feather) {
                            feather.replace();
                        }
                    }
                });
            });
        }
    }
}

customElements.define('custom-navigation', CustomNavigation);
