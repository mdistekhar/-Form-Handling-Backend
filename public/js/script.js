
    // Animation for form elements on load
    document.addEventListener('DOMContentLoaded', () => {
      const formGroups = document.querySelectorAll('.form-group');
      
      formGroups.forEach((group, index) => {
        setTimeout(() => {
          group.style.opacity = '1';
          group.style.transform = 'translateY(0)';
        }, index * 100);
        
        // Initial state
        group.style.opacity = '0';
        group.style.transform = 'translateY(10px)';
        group.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      });
      
      // Form submission animation
      const form = document.querySelector('form');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = document.querySelector('.submit-btn');
        
        // Loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.style.opacity = '0.8';
        
        // Simulate API call
        setTimeout(() => {
          submitBtn.textContent = 'Message Sent!';
          submitBtn.style.backgroundColor = 'var(--success)';
          
          // Reset form after success
          setTimeout(() => {
            form.reset();
            submitBtn.textContent = 'Send Message';
            submitBtn.style.backgroundColor = '';
            submitBtn.style.opacity = '1';
          }, 2000);
        }, 1500);
      });
    });
  