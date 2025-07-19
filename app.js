const menuToggler = document.querySelector('.menu-toggler');
const navMenu = document.querySelector('.nav-menu');

menuToggler.addEventListener('click', () => {
  navMenu.classList.toggle('nav-menu-active');
});

// document.addEventListener("DOMContentLoaded", function () {
//   const hero = document.querySelector(".hero");
//   const heading = hero.querySelector(".hero-art-content h2");
//   const paragraph = hero.querySelector(".hero-art-content > p");

//   const layer1 = document.querySelector(".layer1");
//   const layer2 = document.querySelector(".layer2");

//   const slides = [
//     {
//       bg: "./assets/slideImg1.webp",
//       h2: " Idea to impact. </br> Engineered for outcomes.",
//       p: "We turn ideas into real products with teams built for speed, precision, and results.",
//     },
//     {
//       bg: "./assets/slideImg2.webp",
//       h2: "Engineering ideas.</br>  Delivering outcomes.</br> Scaling impact.",
//       p: " We build lean teams that take ideas to market—and scale them with purpose.",
//     },
//     {
//       bg: "./assets/slideImg3.webp",
//       h2: "Clarity. Velocity. Results. </br> From idea to execution.",
//       p: "Sharp focus, fast execution, real outcomes—at every step of your product journey.",
//     },
//   ];

//   let currentSlide = 0;
//   let intervalTime = 5000;
//   let slideInterval;
//   let isLayer1Active = true;

//   // Preload images
//   slides.forEach(slide => {
//     const img = new Image();
//     img.src = slide.bg;
//   });

//   const heroNavSpans = document.querySelectorAll(".hero-nav span");

//   function setActiveDot(index) {
//     heroNavSpans.forEach((dot, i) => {
//       dot.classList.toggle("active", i === index);
//     });
//   }

//   function updateSlide(index) {
//     const currentLayer = isLayer1Active ? layer1 : layer2;
//     const nextLayer = isLayer1Active ? layer2 : layer1;

//     nextLayer.style.backgroundImage = `url('${slides[index].bg}')`;

//     nextLayer.classList.add("visible");
//     currentLayer.classList.remove("visible");

//     heading.innerHTML = slides[index].h2;
//     paragraph.textContent = slides[index].p;

//     isLayer1Active = !isLayer1Active;
//     currentSlide = index;
//     setActiveDot(index); 
//   }

//   function nextSlide() {
//     const nextIndex = (currentSlide + 1) % slides.length;
//     updateSlide(nextIndex);
//   }

//   function resetInterval() {
//     clearInterval(slideInterval);
//     slideInterval = setInterval(nextSlide, intervalTime);
//   }

//   slideInterval = setInterval(nextSlide, intervalTime);

//   layer1.style.backgroundImage = `url('${slides[0].bg}')`;
//   layer1.classList.add("visible");
//   setActiveDot(0); 

//   hero.addEventListener("click", (e) => {
//     if (!e.target.closest(".hero-btn")) {
//       nextSlide();
//       resetInterval();
//     }
//   });

 
//   heroNavSpans.forEach((dot, index) => {
//     dot.addEventListener("click", (e) => {
//       e.stopPropagation(); 
//       updateSlide(index);
//       resetInterval();
//     });
//   });
// });



// Offer modals
document.addEventListener("DOMContentLoaded", function () {
  const modalCont = document.querySelector(".offer-modal-cont");
  const modalText = document.querySelector(".off-modal-text");
  const closeBtn = document.querySelector(".off-modalClose");
  const modalImg = document.querySelector(".off-modalImg img");

  const modalData = {
    "technical-modal": {
      title: "Technical & Executive Consulting",
      desc: `We align technology with business vision—bridging the gap between strategy and execution. Whether you’re scaling a platform, modernizing infrastructure, or need hands-on leadership, we provide clarity and direction when it matters most.`,
      list: [
        "SaaS & platform architecture strategy",
        "Tech due diligence & advisory",
        "CTO-as-a-Service for early and growth-stage startups",
        "System audits, scalability planning & roadmap alignment"
      ],
      src:'./assets/who1.webp'
    },
    "prodEng-modal": {
      title: "Product Engineering",
      desc: `We build high-impact products from the ground up. Our teams are agile, experienced, and fully aligned with your product goals—working as an extension of your in-house team.`,
      list: [
        "End-to-end product development",
        "MVP definition, design & delivery",
        "Platform modernization",
        "Integration of AI, IoT, and other emerging technologies"
      ],
       src:'./assets/who2.webp',
    },
    "domain-modal": {
      title: "Domain Consulting",
      desc: `Our strength isn’t just in building solutions—it’s in understanding the context. We work closely with business teams to solve operational and domain-specific challenges across industries.`,
      list: [
        "Workflow optimization & process redesign",
        "Growth consulting & business model refinement",
        "Industry-specific strategy (healthcare, fintech, logistics, etc.)",
        "Go-to-market planning & product-market fit discovery"
      ],
       src:'./assets/who3.webp'
    }
  };

  document.querySelectorAll(".offer-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      const id = this.id;
      const data = modalData[id];

      if (data) {
        
        modalText.innerHTML = `
          <h3>${data.title}</h3>
          <p>${data.desc}</p>
          <h4>What we deliver:</h4>
          <ul>
            ${data.list.map(item => `<li>${item}</li>`).join("")}
          </ul>
        `;
        modalImg.src=data.src;
        modalCont.classList.add("offer-modal-active");
      }
    });
  });

  
  closeBtn.addEventListener("click", function () {
    modalCont.classList.remove("offer-modal-active");
  });
});


// contact form
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  const modalContainer = document.querySelector('.contact-modal-container');
  const modalCloseBtn = document.querySelector('.contact-ModalClose');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    modalContainer.classList.add('contact-modal-active');
    form.reset();
  });

  modalCloseBtn.addEventListener('click', () => {
    modalContainer.classList.remove('contact-modal-active');
  });
});


// team modal
document.addEventListener("DOMContentLoaded", function () {
  const seeBioButtons = document.querySelectorAll(".team-btn");
  const modals = document.querySelectorAll(".team-card-modal");
  const teamCards = document.querySelectorAll(".team-card");
  const closeButtons = document.querySelectorAll(".team-modalClose");

  // Handle bio button clicks
  seeBioButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.target;

      // Hide all modals and team cards
      modals.forEach((modal) => modal.classList.add("hidden"));
      teamCards.forEach((card) => card.classList.add("hidden"));

      // Show target modal and card
      document.querySelector(`.team-card-modal${target}`).classList.remove("hidden");
      document.querySelector(`.team-card${target === "1" ? "2" : "1"}`).classList.remove("hidden");
    });
  });

  // Handle all close buttons
  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modals.forEach((modal) => modal.classList.add("hidden"));
      teamCards.forEach((card) => card.classList.remove("hidden"));
    });
  });
});
