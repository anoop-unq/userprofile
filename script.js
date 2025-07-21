let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 25) {
    nav.classList.add("sticky");
    let scrolled = document.querySelector(".scroll-button")
    scrolled.style.display = "block";
    scrollBtn.style.display = "block";
    scrollBtn.style.zIndex = '999'
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};


// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let navItems = document.querySelectorAll(".nav-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let menu = document.querySelector(".menu");

// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "1";
};

const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Close side navigation
cancelBtn.onclick = hideNavMenu;

// Close side navigation when a menu link is clicked
document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
    // menu.classList.remove('active');
    navBar.classList.remove("active");
  }
});

// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});


// animation for navbar
const hamburgerMenu = document.getElementById("menuSide");
const navMenu = document.getElementById("menuBook");
const properless = document.getElementById("proper")
let navItem = navMenu.querySelectorAll(".nav-btn");
let social = document.getElementById("socialMedia");
let socialItem = social.querySelectorAll(".nav-btn-1");
// Add event listener to toggle the menu
hamburgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  // navMenu.style.opacity = "0";
  // Trigger animations for nav items
  if (navMenu.classList.contains("active")) {
    navItem.forEach((item, index) => {
      item.style.animation =`slideIn 1.5s ease both ${index * 1.1}s`;
      // item.style.animation = `slideIn 3.5s ease both ${item * 2.5}s`;
    });
    
  }
  else {
    navItem.forEach((item) => {
      item.style.animation = "";
  // Reset animation
    });
  }
  social.classList.toggle("active");
  if (social.classList.contains("active")) {
    socialItem.forEach((item, index) => {
      item.style.animation = `slideIntro 1.5s ease both ${index * 2.1}s`;
      // item.style.animation = `slideIn 3.5s ease both ${item * 2.5}s`;
    });
  }
  else {
    socialItem.forEach((item) => {
      item.style.animation = ""; // Reset animation
    });
  }
  
});


document.addEventListener("DOMContentLoaded", function () {
  var selectedBox = document.getElementById("selected-box");

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in-blurred-bottom");
      } else {
        entry.target.classList.remove("bounce-in-top");
      }
    });
  });

  // Observe only the selected box
  observer.observe(selectedBox);
});
function downloadCV() {
  const link = document.createElement('a');
  link.href = "resumeCv/Anoop_Front_Dev.pdf";
  link.download = 'Anoop_Front_Dev.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  const msg = document.getElementById('message');
  msg.classList.add('show');

  setTimeout(() => {
    msg.classList.remove('show');
  }, 3000);
}


      document.getElementById("scrollToTop").addEventListener("click", function(e) {
      e.preventDefault();
      window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  
 initCarousel(
      "carouselCard1",
      ["ka11-transformed.jpeg", "all.jpg", "arjun-dF9yL4EyU-transformed.jpeg","blink.webp","karnaprabha.jpg"],
      "Mahabharat Website",
      "Dive into the epic story of Mahabharat through visuals and moments.",
      "https://anoop-unq.github.io/Mahabharat/"
    );

    initCarousel(
      "carouselCard2",
      ["Screenshot 2025-04-22 121118.png","second.png","image.png","Screenshot 2025-04-22 115901.png","news (2).png"],
      "Wikipedia search",
      "A smart Wikipedia search app that brings results to life by combining multiple APIs. Along with Wikipedia data, it shows related images, videos, and summaries — all in one place for a richer search experience.",
      "https://anoop-unq.github.io/wikipedia/"
    );

    initCarousel(
      "carouselCard3",
      ["firstTodo.png","secondTodo.png","thirdTodo.png"],
      "Todo List",
      "A simple and user-friendly task manager built with HTML, CSS, and JavaScript. It lets you add and delete tasks, with data saved using localStorage to keep your list even after refreshing.",
      "https://anoop-unq.github.io/todoList/"
    );

     initCarousel(
      "carouselCard4",
      ["firstCar.png","secondCar.png","thirdCar.png"],
      "Car Landing Page",
      "A responsive and visually appealing landing page for a car brand. Features include a bold hero section, animated scroll effects, and clear CTAs. Built with HTML, CSS, and JavaScript for smooth, user-friendly interaction.",
      "https://anoop-unq.github.io/carPage/"
    );
    
    initCarousel(
      "carouselCard5",
      ["firstBr.png","secondBr.png","thirdBr.png"],
      "Br Architecture",
      "Uses JavaScript to manipulate the DOM for dynamic and interactive business solutions, without relying on HTML structure.",
      "https://anoop-unq.github.io/brArchitecture/"
    );

     initCarousel(
      "carouselCard6",
      ["firstHang.png","secondHang.png","thirdHang.png"],
      "HangMan Game",
      "A classic word-guessing game where players try to guess a hidden word by suggesting letters, with a limited number of incorrect guesses allowed.",
      "https://anoop-unq.github.io/Hangman/"
    );

    function initCarousel(containerId, images, title, description, liveLink) {
      const container = document.getElementById(containerId);

      container.innerHTML = `
        <div class="carousel-container" id="${containerId}-container">
          <div class="carousel-track" id="${containerId}-track">
            ${images.map(img => `<img src="${img}" class="carousel-image" />`).join('')}
          </div>
          <div class="carousel-indicators" id="${containerId}-indicators"></div>
          <button class="carousel-btn left" id="${containerId}-prev">&#10094;</button>
          <button class="carousel-btn right" id="${containerId}-next">&#10095;</button>
        </div>
        <div class="project-content">
          <h3 class="project-title">${title}</h3>
          <p class="project-description">${description}</p>
          <div class="project-links">
            <a href="#" onclick="openWithSpinner(event, '${liveLink}','${containerId}-spinner')">Live Project</a>
           <div id="${containerId}-spinner" class="spinner">
             <div class="dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            </div>
             <div class="loading-text"></div>
            </div>
          </div>
        </div>
      `;

      const track = document.getElementById(`${containerId}-track`);
      const indicatorsContainer = document.getElementById(`${containerId}-indicators`);
      const swipeContainer = document.getElementById(`${containerId}-container`);
      let currentIndex = 0;
      const totalSlides = images.length;
      let autoSlide;

      function updateSlidePosition() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateIndicators();
      }

      function moveSlide(direction) {
        currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
        updateSlidePosition();
      }

      function updateIndicators() {
        const indicators = document.querySelectorAll(`#${containerId}-indicators .indicator`);
        indicators.forEach((dot, idx) => {
          dot.classList.toggle("active", idx === currentIndex);
        });
      }

      function createIndicators() {
        for (let i = 0; i < totalSlides; i++) {
          const dot = document.createElement("div");
          dot.classList.add("indicator");
          if (i === 0) dot.classList.add("active");
          dot.addEventListener("click", () => {
            currentIndex = i;
            updateSlidePosition();
          });
          indicatorsContainer.appendChild(dot);
        }
      }

      function startAutoSlide() {
        autoSlide = setInterval(() => moveSlide(1), 3800);
      }

      function stopAutoSlide() {
        clearInterval(autoSlide);
      }

      // Swipe Detection
      let startX = 0;
      swipeContainer.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
        stopAutoSlide();
      });

      swipeContainer.addEventListener("touchend", (e) => {
        const endX = e.changedTouches[0].clientX;
        const diff = endX - startX;
        if (diff > 50) moveSlide(-1);
        else if (diff < -50) moveSlide(1);
        startAutoSlide();
      });

      document.getElementById(`${containerId}-prev`).addEventListener("click", () => moveSlide(-1));
      document.getElementById(`${containerId}-next`).addEventListener("click", () => moveSlide(1));

      createIndicators();
      updateSlidePosition();
      startAutoSlide();
    }

   function openWithSpinner(event, liveLink,spinnerId) {
  event.preventDefault();

  const spinner = document.getElementById(spinnerId);
  if (spinner) {
    spinner.style.display = 'block';
  }

  setTimeout(() => {
    window.location.href = liveLink;
  }, 1200); 
}


    document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
      if (window.innerWidth > 768) {
        card.setAttribute('data-aos', 'fade-up');
         card.setAttribute('data-aos-delay', `${index * 400}`);
          card.setAttribute('data-aos-duration', '500');
      } else {
        card.setAttribute('data-aos', 'fade-up');
      }
    });
  });

   const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
          const skillBar = entry.target;
          const fill = skillBar.querySelector('.fill');
          const percentSpan = skillBar.querySelector('.percent');
          const target = parseInt(skillBar.getAttribute('data-percent'));

          // Animate fill width
          fill.style.width = `${target}%`;
           if (target <= 80) {
          fill.style.background = '#4facfe'; 
        } else {
          fill.style.background = '#34d399';
        }
          // Animate number
          let count = 0;
          const duration = 3500;
          const step = Math.ceil(target / (duration / 10));
          const interval = setInterval(() => {
            count += step;
            if (count >= target) {
              count = target;
              clearInterval(interval);
            }
            percentSpan.textContent = `${count}%`;
          }, 20);

          skillBar.classList.add('animated');
        }
      });
    }, { threshold: 0.9 });

    document.querySelectorAll('.skill-bar').forEach(skill => {
      observer.observe(skill);
    });

    
   
    let dark = document.querySelector(".dark-mode")
    dark.addEventListener("click",function(){
    // body.style.backgroundColor="#121212";
   document.body.classList.toggle('dark')
   let moon = document.getElementById('moon')
   
   document.querySelector('.para').classList.toggle('dark')
   document.querySelector('.auto').classList.toggle('dark')
   document.querySelector('.title').classList.toggle('dark')
   document.getElementById('clip-text1').classList.toggle('dark')
   document.getElementById('clip-text').classList.toggle('dark')
   document.getElementById('clip-text0').classList.toggle('dark')
   document.getElementById('clip-text00').classList.toggle('dark')
   document.getElementById('skills').classList.toggle('dark')
  
   document.querySelector('.titleE1').classList.toggle('dark')
   document.querySelector('.button-logic').classList.toggle('dark')
   document.querySelector('.move-on').classList.toggle('dark')
   document.querySelector('.title11').classList.toggle('dark')
   document.querySelector('.title22').classList.toggle('dark')
   document.querySelector('.title33').classList.toggle('dark')
   document.querySelector('.title44').classList.toggle('darkness')
   let icons = document.querySelectorAll('.graduate')
      icons.forEach(icon =>{
        icon.classList.toggle('dark')
      })


  let menuItems =  document.querySelectorAll('.nav-btn')
  menuItems.forEach(menu =>{
    menu.classList.toggle('darkness')
  })



  //  document.querySelectorAll('.label').classList.toggle('dark')
   let labelit = document.querySelectorAll('.label')
   labelit.forEach(label => {
     label.classList.toggle('dark');
   })

   let pro = document.querySelectorAll('.project-card')
   pro.forEach(proplayer =>{
    proplayer.style.borderRadius="9px"
    proplayer.style.border="none"
   })
   let contactsection= document.querySelector('.contact-section')
   contactsection.style.margin="11px"
   contactsection.style.borderRadius="9px"
   contactsection.style.border="none"
      //  <i class="fa-duotone fa-solid fa-moon" id="moon"></i>
    })


        let darkman = document.querySelector(".dark-mode-1")
    darkman.addEventListener("click",function(){
    // body.style.backgroundColor="#121212";
   document.body.classList.toggle('dark')
   let moon = document.getElementById('moon')
  
   document.querySelector('.auto').classList.toggle('dark')
   document.querySelector('.title').classList.toggle('dark')
   document.getElementById('clip-text1').classList.toggle('dark')
   document.getElementById('clip-text').classList.toggle('dark')
   document.getElementById('clip-text0').classList.toggle('dark')
   document.getElementById('clip-text00').classList.toggle('dark')
   document.getElementById('skills').classList.toggle('dark')

   document.querySelector('.titleE1').classList.toggle('dark')
   document.querySelector('.button-logic').classList.toggle('dark')
   document.querySelector('.move-on').classList.toggle('dark')
   document.querySelector('.title11').classList.toggle('dark')
   document.querySelector('.title22').classList.toggle('dark')
   document.querySelector('.title33').classList.toggle('dark')
   document.querySelector('.title44').classList.toggle('dark')

  let menuItems =  document.querySelectorAll('.nav-btn')
  menuItems.forEach(menu =>{
    menu.classList.toggle('dark')
  })

  let menuItemsE1 =  document.querySelectorAll('.nav-btn-22')
  menuItemsE1.forEach(menu =>{
    menu.classList.toggle('dark')
  })
  



  //  document.querySelectorAll('.label').classList.toggle('dark')
   let labelit = document.querySelectorAll('.label')
   labelit.forEach(label => {
     label.classList.toggle('dark');
   })

   let pro = document.querySelectorAll('.project-card')
   pro.forEach(proplayer =>{
    proplayer.style.borderRadius="9px"
    proplayer.style.border="none"
   })
   let contactsection= document.querySelector('.contact-section')
   contactsection.style.margin="11px"
   contactsection.style.borderRadius="9px"
   contactsection.style.border="none"




   


      //  <i class="fa-duotone fa-solid fa-moon" id="moon"></i>
    })

    // User pop-up code !
 

    const userButton = document.getElementById("useranoop");
    const userPopover = document.getElementById("userPopover");

    userButton.addEventListener("click", () => {
      const isVisible = userPopover.classList.toggle("active");

      if (isVisible) {
        const rect = userButton.getBoundingClientRect();

        // Position the popover fixed relative to the viewport
        userPopover.style.position = "fixed";
        userPopover.style.top = rect.bottom + 10 + "px";
        userPopover.style.left = rect.left + "px";
        userPopover.style.display = "block";
        void userPopover.offsetWidth; // Force reflow
        userPopover.classList.remove("hide");
        userPopover.classList.add("show");

      }
    });

    // Close popover when clicking outside
    document.addEventListener("click", function (event) {
      if (userPopover.contains(event.target) && !userButton.contains(event.target)) {
        userPopover.classList.remove("active");
      }
    });

    function openImage() {
    const imageUrl = 'provisional.jpg';
    window.open(imageUrl, '_self');
  }
  
  let cardUser = document.querySelector('.log-out')
  
  cardUser.addEventListener("click",function(){
    
   userPopover.classList.add("hide");
   

  
  // Optionally fully hide after animation
  setTimeout(() => {
    userPopover.style.display = "none";
        userPopover.classList.remove("show");

    userPopover.classList.remove("hide"); 
  },500)
})
