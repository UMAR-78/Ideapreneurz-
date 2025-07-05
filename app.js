const menuToggler=document.querySelector('.menu-toggler')
const navMenu=document.querySelector('.nav-menu')

menuToggler.addEventListener('click',()=>{
    navMenu.classList.toggle('nav-menu-active')
})

document.addEventListener("DOMContentLoaded", function () {
// hero slider
const hero = document.querySelector(".hero");
const heading = hero.querySelector(".hero-art-content h2");
const paragraph = hero.querySelector(".hero-art-content > p");

const layer1 = document.querySelector(".layer1");
const layer2 = document.querySelector(".layer2");

const slides = [
  {
    bg: "./assets/Slide-img1.png",
    h2: "<span>Ideas</span> Realized",
    p: "We are a team of creators working at the intersection of design and technology.",
  },
  {
    bg: "./assets/Slide-img2.png",
    h2: "<span>Ideas</span> Realized",
    p: "We are a team of creators working at the intersection of design and technology.",
  },
  {
    bg: "./assets/Slide-img3.png",
    h2: "<span>Ideas</span> Realized",
    p: "We are a team of creators working at the intersection of design and technology.",
  },
];

let currentSlide = 0;
let intervalTime = 5000;
let slideInterval;

slides.forEach(slide => {
  const img = new Image();
  img.src = slide.bg;
});

let isLayer1Active = true;

function updateSlide(index) {
  const currentLayer = isLayer1Active ? layer1 : layer2;
  const nextLayer = isLayer1Active ? layer2 : layer1;

  nextLayer.style.backgroundImage = `url('${slides[index].bg}')`;

  nextLayer.classList.add("visible");
  currentLayer.classList.remove("visible");

  heading.innerHTML = slides[index].h2;
  paragraph.textContent = slides[index].p;

  isLayer1Active = !isLayer1Active;
  currentSlide = index;
}

function nextSlide() {
  const nextIndex = (currentSlide + 1) % slides.length;
  updateSlide(nextIndex);
}

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, intervalTime);
}

slideInterval = setInterval(nextSlide, intervalTime);

layer1.style.backgroundImage = `url('${slides[0].bg}')`;
layer1.classList.add("visible");

hero.addEventListener("click", (e) => {
  if (!e.target.closest(".hero-btn")) {
    nextSlide();
    resetInterval();
  }
});

})


// Offer modals
document.addEventListener("DOMContentLoaded", function () {
  const modalCont = document.querySelector(".offer-modal-cont");
  const modalText = document.querySelector(".off-modal-text");
  const closeBtn = document.querySelector(".off-modalClose");

  const modalData = {
    "technical-modal": {
      title: "Technical & Executive Consulting",
      desc: `We align technology with business vision—bridging the gap between strategy and execution. Whether you’re scaling a platform, modernizing infrastructure, or need hands-on leadership, we provide clarity and direction when it matters most.`,
      list: [
        "SaaS & platform architecture strategy",
        "Tech due diligence & advisory",
        "CTO-as-a-Service for early and growth-stage startups",
        "System audits, scalability planning & roadmap alignment"
      ]
    },
    "prodEng-modal": {
      title: "Product Engineering",
      desc: `We build high-impact products from the ground up. Our teams are agile, experienced, and fully aligned with your product goals—working as an extension of your in-house team.`,
      list: [
        "End-to-end product development",
        "MVP definition, design & delivery",
        "Platform modernization",
        "Integration of AI, IoT, and other emerging technologies"
      ]
    },
    "domain-modal": {
      title: "Domain Consulting",
      desc: `Our strength isn’t just in building solutions—it’s in understanding the context. We work closely with business teams to solve operational and domain-specific challenges across industries.`,
      list: [
        "Workflow optimization & process redesign",
        "Growth consulting & business model refinement",
        "Industry-specific strategy (healthcare, fintech, logistics, etc.)",
        "Go-to-market planning & product-market fit discovery"
      ]
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


// About slider
document.addEventListener('DOMContentLoaded',()=>{
  const aboutDisplayImg=document.querySelector('.about-display img')
  const aboutSlidesImages=document.querySelectorAll('.about-slideImg')
  aboutSlidesImages.forEach(slide=>{
    slide.addEventListener('click',(e)=>{
     const clickedImg = slide.querySelector('img')
     aboutDisplayImg.src = clickedImg.src;
      
    })
  })
})