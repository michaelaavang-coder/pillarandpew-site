// footer.js
class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer-wrapper">
                <div class="footer-container">
                    <div class="footer-brand-section">
                        <div class="footer-brand">PILLAR<span class="amp">&</span>PEW</div>
                        <p class="footer-text">
                            Faith, Reason, and Readiness.  
                            Bold writing on philosophy, Catholic truth, firearms, and culture â€” without apology.
                        </p>
                    </div>

                    <div class="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#articles">Articles</a></li>
                            <li><a href="#submit">Submit Your Work</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div class="footer-links">
                        <h4>Connect</h4>
                        <ul>
                            <li><a href="guidelines.html">Submission Guidelines</a></li>
                            <li><a href="#" target="_blank" rel="noopener">X / Twitter</a></li>
                            <li><a href="#" target="_blank" rel="noopener">YouTube</a></li>
                            <li><a href="mailto:hello@pillarandpew.com">Email Us</a></li>
                        </ul>
                    </div>
                </div>

                <div class="copyright">
                    Â© ${new Date().getFullYear()} Pillar & Pew. All rights reserved.
                </div>
            </footer>
            
            <style>
                .footer-wrapper {
                    background-color: #000;
                    color: white;
                    padding: 3rem 2rem 2rem;
                    font-family: 'Inter', sans-serif;
                }
                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2.5rem;
                }
                @media (min-width: 768px) {
                    .footer-container {
                        grid-template-columns: 2fr 1fr 1fr;
                    }
                }
                .footer-brand {
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 900;
                    font-size: 1.8rem;
                    margin-bottom: 1rem;
                }
                .footer-brand .amp {
                    color: #c8102e;
                }
                .footer-text {
                    font-size: 0.95rem;
                    line-height: 1.6;
                    opacity: 0.9;
                    max-width: 380px;
                }
                .footer-links h4 {
                    font-size: 1.1rem;
                    font-weight: bold;
                    margin-bottom: 1.2rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .footer-links ul {
                    list-style: none;
                    padding: 0;
                }
                .footer-links a {
                    color: white;
                    text-decoration: none;
                    display: block;
                    margin-bottom: 0.75rem;
                    opacity: 0.85;
                    transition: opacity 0.2s, color 0.2s;
                }
                .footer-links a:hover {
                    opacity: 1;
                    color: #c8102e;
                }
                .copyright {
                    text-align: center;
                    margin-top: 3rem;
                    padding-top: 2rem;
                    border-top: 1px solid #333;
                    font-size: 0.9rem;
                    opacity: 0.7;
                }
            </style>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);
