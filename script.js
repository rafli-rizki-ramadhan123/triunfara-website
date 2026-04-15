document.addEventListener("DOMContentLoaded", function(){

  /* =========================
     NAVBAR SCROLL
  ========================= */
  window.addEventListener("scroll", () => {
    let nav = document.getElementById("navbar");

    if (nav) {
      nav.style.background = window.scrollY > 50 
        ? "rgba(0,0,0,0.8)" 
        : "rgba(0,0,0,0.5)";
    }
  });

  /* =========================
     MUSIC
  ========================= */
  const music = document.getElementById("bg-music");
  const btn = document.getElementById("music-btn");

  if(btn && music){
    btn.onclick = () => {
      music.paused ? music.play() : music.pause();
    };
  }

  /* =========================
     SERVICE CARD
  ========================= */
  const cards = document.querySelectorAll(".service-card");

  cards.forEach(card => {

    // ACCORDION
    card.addEventListener("click", () => {
      cards.forEach(c => {
        if(c !== card) c.classList.remove("active");
      });
      card.classList.toggle("active");

      // AUTO CENTER (SLIDER)
      card.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest"
      });
    });

    // FIX VIDEO CLICK
    const iframe = card.querySelector("iframe");
    if(iframe){
      iframe.addEventListener("click", (e) => e.stopPropagation());
    }

    // PARALLAX (RINGAN - NO LAG)
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = -(y - rect.height/2) / 30;
      const rotateY = (x - rect.width/2) / 30;

      card.style.transform = `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)
      `;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });

  });

  /* =========================
     SCROLL ANIMATION (SUPER LIGHT)
  ========================= */
  const elements = document.querySelectorAll(".service-card, .schedule-card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.2
  });

  elements.forEach(el => observer.observe(el));

});