// ===== bestultrapremiumcard.live - Luxury Banking JavaScript =====

document.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

  // Fade-in animations
  const fadeElements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => observer.observe(el));

  // Animated counter
  const statNumbers = document.querySelectorAll('.stat-number');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const text = target.textContent;
        const hasComma = text.includes(',');
        const hasPlus = text.includes('+');
        const numStr = text.replace(/[^0-9.]/g, '');
        const targetNum = parseFloat(numStr);
        
        if (isNaN(targetNum)) return;
        
        let current = 0;
        const duration = 2500;
        const steps = 60;
        const increment = targetNum / steps;
        let step = 0;
        
        const timer = setInterval(() => {
          step++;
          current = Math.min(current + increment, targetNum);
          let display;
          if (hasPlus) display = Math.round(current).toLocaleString() + '+';
          else display = Math.round(current).toLocaleString();
          target.textContent = display;
          if (step >= steps) {
            target.textContent = text;
            clearInterval(timer);
          }
        }, duration / steps);
        
        counterObserver.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => counterObserver.observe(el));

  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const submitBtn = this.querySelector('.btn-primary');
      if (submitBtn) {
        submitBtn.textContent = 'INQUIRY SUBMITTED';
        submitBtn.style.pointerEvents = 'none';
        setTimeout(() => {
          submitBtn.textContent = 'SUBMIT INQUIRY';
          submitBtn.style.pointerEvents = 'auto';
          this.reset();
        }, 3000);
      }
    });
  }
});
