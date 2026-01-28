// Scroll animation for sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-animate');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Newsletter form validation and submission
    const newsletterForm = document.querySelector('#newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('#newsletter-email');
            const email = emailInput.value.trim();
            
            // Basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (emailRegex.test(email)) {
                // TODO: Replace this with your actual email service integration
                // Examples: Mailchimp, ConvertKit, SendGrid, etc.
                
                // For now, just show success message
                alert('Thanks for subscribing! You\'ll hear from us soon.');
                emailInput.value = '';
                
                // Example of how to integrate with a service:
                /*
                fetch('YOUR_EMAIL_SERVICE_ENDPOINT', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: email })
                })
                .then(response => response.json())
                .then(data => {
                    alert('Thanks for subscribing!');
                    emailInput.value = '';
                })
                .catch(error => {
                    alert('Something went wrong. Please try again.');
                    console.error('Error:', error);
                });
                */
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Don't prevent default for # only links
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
