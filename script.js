// Initialize Lucide Icons
lucide.createIcons();

// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-question').classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
        question.classList.toggle('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Google Form Linking for Domain Cards
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSergf64xNk_hRgWevJGceX_TqYqd43NfBWcRAiHsPYcsrxLHw/viewform?usp=publish-editor';

document.querySelectorAll('.domain-card').forEach(card => {
    card.addEventListener('click', (e) => {
        // If the user clicked the link directly, let the anchor tag handle opening the URL
        if (e.target.closest('a')) return;
        window.open(GOOGLE_FORM_URL, '_blank');
    });
});
