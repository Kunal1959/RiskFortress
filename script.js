// Common Header & Footer Components
const headerHTML = `
    <div class="logo">
        <div class="logo-icon">RF</div>
        <div class="logo-text">RiskFortress</div>
    </div>
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="service.html">Services</a></li>
            <li><a href="process.html">The Process</a></li>
            <li><a href="case_study.html">Case Studies</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
    <button class="nav-cta" onclick="window.location.href='contact.html'">Schedule Briefing</button>
    <div class="mobile-menu">
        <i class="fas fa-bars"></i>
    </div>
`;

const footerHTML = `
    <div class="footer-content">
        <div class="footer-logo">
            <div class="logo">
                <div class="logo-icon">RF</div>
                <div class="logo-text">RiskFortress</div>
            </div>
            <p>Intelligence Protects Wealth. See the Risk Before It Strikes.</p>
            <div class="footer-contact-info">
                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <a href="mailto:support@riskfortress.com">support@riskfortress.com</a>
                </div>
                <div class="contact-item">
                    <i class="fas fa-phone"></i>
                    <a href="tel:+911234567890">+91 123 456 7890</a>
                </div>
                <div class="contact-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>Sector 62, Noida, Uttar Pradesh, India</span>
                </div>
            </div>
        </div>
        <div class="footer-links">
            <div class="footer-links-column">
                <h3>Services</h3>
                <ul>
                    <li><a href="service.html">Land Regulation Risk Mapping</a></li>
                    <li><a href="service.html">Infrastructure Impact Forecasting</a></li>
                    <li><a href="service.html">Compliance Strategy</a></li>
                </ul>
            </div>
            <div class="footer-links-column">
                <h3>Company</h3>
                <ul>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="process.html">Our Process</a></li>
                    <li><a href="case_study.html">Case Studies</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
            <div class="footer-links-column">
                <h3>Ventures</h3>
                <ul>
                    <li><a href="#">Mayajob</a></li>
                    <li><a href="#">GuruMaya</a></li>
                    <li><a href="#">Deeplink Creators</a></li>
                    <li><a href="#">Mayavi_studio</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <p>All insights based on publicly available regulatory and spatial data.</p>
        <p>© 2024 RiskFortress — A Platform of <strong>Mayalok Ventures</strong>. All rights reserved.</p>
    </div>
`;

document.addEventListener('DOMContentLoaded', function () {
    // Inject Header
    const headerElement = document.querySelector('header');
    if (headerElement) {
        headerElement.innerHTML = headerHTML;
        setActiveNavLink();
        setupMobileMenu();
    }

    // Inject Footer
    const footerElement = document.querySelector('footer');
    if (footerElement) {
        footerElement.innerHTML = footerHTML;
    }

    // Initialize Timeline Animations (if timeline exists)
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.3 });

        timelineItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(item);
        });
    }
});

function setActiveNavLink() {
    const currentPath = window.location.pathname;
    // Extract filename from path (e.g., "about.html" from "/about.html" or "/subdir/about.html")
    let filename = currentPath.split('/').pop();
    
    // Default to index.html if path is root or empty
    if (!filename || filename === '') {
        filename = 'index.html';
    }

    const links = document.querySelectorAll('nav ul li a');
    
    links.forEach(link => {
        if (link.getAttribute('href') === filename) {
            link.style.color = 'var(--gold)';
        }
    });
}

function setupMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navUl = document.querySelector('nav ul');
    
    if (mobileMenu && navUl) {
        mobileMenu.addEventListener('click', () => {
            navUl.classList.toggle('active');
            
            // Toggle icon
            const icon = mobileMenu.querySelector('i');
            if (icon) {
                if(navUl.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }
}
