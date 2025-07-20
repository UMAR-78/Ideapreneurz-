const menuToggler = document.querySelector('.menu-toggler');
const navMenu = document.querySelector('.nav-menu');

menuToggler.addEventListener('click', () => {
  navMenu.classList.toggle('nav-menu-active');
});


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
