class CustomNavigation extends HTMLElement {
    connectedCallback() {
        // Check if user is logged in
        const userData = localStorage.getItem('pillarandpew_user') || sessionStorage.getItem('pillarandpew_user');
        const user = userData ? JSON.parse(userData) : null;
        
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
                        ${user ? `
                            <span class="user-welcome">Welcome, ${user.firstName}</span>
                            <a href="#" id="logoutBtn" class="logout-link">Logout</a>
                        ` : `
                            <a href="login.html" class="login-link">Login</a>
                        `}
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
                    ${user ? `
                        <span class="mobile-user-welcome">Welcome, ${user.firstName}</span>
                        <a href="#" id="mobileLogoutBtn" class="logout-link">Logout</a>
                    ` : `
                        <a href="login.html" class="login-link">Login</a>
                    `}
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
                    align-items: center;
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
                .user-welcome {
                    color: #c8102e;
                    font-weight: bold;
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .logout-link {
                    color: white !important;
                    border: 1px solid white;
                    padding: 0.5rem 1rem;
                    transition: background-color 0.3s, color 0.3s;
                }
                .logout-link:hover {
                    background-color: white;
                    color: #000 !important;
                }
                .login-link {
                    color: white !important;
                    border: 1px solid #c8102e;
                    padding: 0.5rem 1rem;
                    background-color: #c8102e;
                    transition: background-color 0.3s;
                }
                .login-link:hover {
                    background-color: #a00d26;
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
                .mobile-menu a, .mobile-menu span {
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
                .mobile-menu a:last-child, .mobile-menu span:last-child {
                    border-bottom: none;
                }
                .mobile-user-welcome {
                    color: #c8102e;
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
        
        // Logout functionality
        const logoutBtn = this.querySelector('#logoutBtn');
        const mobileLogoutBtn = this.querySelector('#mobileLogoutBtn');
        
        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                handleLogout();
            });
        }
        
        if (mobileLogoutBtn) {
            mobileLogoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                handleLogout();
            });
        }
        
        function handleLogout() {
            localStorage.removeItem('pillarandpew_user');
            sessionStorage.removeItem('pillarandpew_user');
            window.location.href = 'index.html';
        }
        
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
