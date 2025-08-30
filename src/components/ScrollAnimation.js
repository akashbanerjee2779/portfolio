import { useEffect } from 'react';

function ScrollAnimation() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    const checkVisibility = () => {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('visible');
        }
      });
    };
    
    // Check on initial load
    checkVisibility();
    
    // Check on scroll
    window.addEventListener('scroll', checkVisibility);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);
  
  return null;
}

export default ScrollAnimation;