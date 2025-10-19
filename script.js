const toggle = document.getElementById('theme-toggle');
const body = document.body;
const starsContainer = document.querySelector('.stars');

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    toggle.checked = true;
    createShootingStars();
}

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        createShootingStars();
    } else {
        body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        clearStars();
    }
});

// Create shooting stars dynamically
function createShootingStars() {
    clearStars();
    for (let i = 0; i < 15; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = Math.random() * window.innerHeight + 'px';
        star.style.left = Math.random() * window.innerWidth + 'px';
        star.style.animationDelay = Math.random() * 5 + 's';
        star.style.animationDuration = 1.5 + Math.random() * 1.5 + 's';
        starsContainer.appendChild(star);
    }
}

// Remove all stars when light mode is active
function clearStars() {
    starsContainer.innerHTML = '';
}


    function setDynamicBackground() {
        const body = document.body;
        const hours = new Date().getHours();

        // Reset custom background first
        body.style.background = '';
        body.classList.remove('morning', 'noon', 'evening');

        // Morning (5 AM – 11 AM)
        if (hours >= 5 && hours < 11) {
            body.classList.add('morning');
        }
        // Noon (11 AM – 5 PM)
        else if (hours >= 11 && hours < 17) {
            body.classList.add('noon');
        }
        // Evening (5 PM – 8 PM)
        else if (hours >= 17 && hours < 20) {
            body.classList.add('evening');
        }
        // Night automatically covered by dark mode if toggled manually
    }

    // Run when the page loads
    window.addEventListener('load', setDynamicBackground);
  
   function setDynamicBackground() {
        const body = document.body;
        const hours = new Date().getHours();

        // Remove previous theme classes
        body.classList.remove('morning', 'noon', 'evening');

        if (hours >= 5 && hours < 11) {
            body.classList.add('morning');
        } else if (hours >= 11 && hours < 17) {
            body.classList.add('noon');
        } else if (hours >= 17 && hours < 20) {
            body.classList.add('evening');
        }
    }

    // Update background smoothly every 5 minutes
    setDynamicBackground();
    setInterval(setDynamicBackground, 5 * 60 * 1000);

  const backToTop = document.getElementById("backToTop");

  window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  };

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  