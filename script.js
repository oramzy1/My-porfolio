function toggleMenu() {
    const menu = document.querySelector('.navbar-menu');
    menu.classList.toggle('active');
  }

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const menu = document.querySelector('.navbar-menu');
      menu.classList.remove('active'); // Close the menu
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const output = document.getElementById("typed-output");
    const texts = ["..hello!", "..I'm Oramabo Gift"];
    let currentTextIndex = 0;
    let charIndex = 0;
    const typingSpeed = 100;
    const pause = 2000;
  
    function type() {
      const currentText = texts[currentTextIndex];
      output.textContent = currentText.slice(0, charIndex + 1);
  
      if (charIndex < currentText.length - 1) {
        charIndex++;
        setTimeout(type, typingSpeed);
      } else if (currentTextIndex < texts.length - 1) {
        
        setTimeout(() => {
          currentTextIndex++;
          charIndex = 0;
          type();
        }, pause);
      }
    }
  
    type();
  });
  