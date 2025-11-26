//  ------------------------------------ Scroll Spy
document.addEventListener("DOMContentLoaded", () => {
  let sections = document.querySelectorAll('section');
  let navlinks = document.querySelectorAll('header nav a');

  window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navlinks.forEach(link => link.classList.remove('active'));
        let targetLink = document.querySelector('header nav a[href*="' + id + '"]');
        if (targetLink) {
          targetLink.classList.add('active');
        }
      }
    });

    // Back to top button logic
    const btn = document.getElementById("backToTopBtn");
    btn.style.display = (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) ? "block" : "none";
  };
});


//  ------------------------------------ Back to Top Button
    // Scroll to top smoothly
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }


// -----------------------  Typed.js for home section
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Youtuber', 'Web Designer', 'UI/UX Designer', 'Blogger'],
    typeSpeed: 100, 
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// -----------------------  Typed.js for about section
const typeed = new Typed('.multi-text', {
    strings: ['Frontend Developer', 'Youtuber', 'Web Designer', 'UI/UX Designer', 'Blogger'],
    typeSpeed: 100, 
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



// -----------------------  circle skill 
const circles = document.querySelectorAll('.circle');

circles.forEach(elem => {
    const dots = +elem.getAttribute("data-dots");
    const marked = +elem.getAttribute("data-percent");
    const percent = Math.floor(dots * marked / 100);
    const rotate = 360 / dots;
    let points = "";

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }

    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll(".points");
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
});
  
// -----------------------  portfolio section tab animation 

  const tabButtons = document.querySelectorAll('.tab-list');
  const tabContents = document.querySelectorAll('.tab-grid');

  tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-tab');

    // Remove 'active' from all
    tabButtons.forEach(b => b.classList.remove('active'));
    tabContents.forEach(tc => tc.classList.remove('active'));

    // Show target tab
    btn.classList.add('active');
    const targetContent = document.querySelector(`.tab-grid.${target}`);
    targetContent.classList.add('active');

    // 🔁 ScrollReveal only on visible tab items
    ScrollReveal().reveal(`.tab-grid.${target} .tab-item`, { 
      origin: 'bottom', 
      interval: 100 
    });
  });
});



// -----------------------  scroll reveal
ScrollReveal({ 
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box, .portfolio-box.service, .contact form, .testimonials-box', { origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.tab-grid.work .tab-item', { origin: 'bottom', interval: 100 });
ScrollReveal().reveal('.home-content h1, .about-img, .skill-left', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .skill-right', { origin: 'right' });

// // -----------------------  toggler icon navbar
// let menuIcon = document.querySelector("#menu-icon");
// let myNav = document.querySelector(".myNav");

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle("fa-times");
//     myNav.classList.toggle("open");
//     menuIcon.classList.toggle("rotate");
// }

// window.onscroll = () => {
//     menuIcon.classList.remove("fa-times");
//     myNav.classList.remove("open");
// }




