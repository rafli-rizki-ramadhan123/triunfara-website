document.addEventListener("DOMContentLoaded", function () {

  /* ======================================
      NAVBAR SCROLL
  ====================================== */

  const nav = document.getElementById("navbar");

  if (nav) {
    window.addEventListener("scroll", () => {
      nav.style.background =
        window.scrollY > 50
          ? "rgba(0,0,0,0.8)"
          : "rgba(0,0,0,0.5)";
    });
  }

  /* ======================================
      MUSIC
  ====================================== */

  const music = document.getElementById("bg-music");
  const btn = document.getElementById("music-btn");

  if (music && btn) {

    btn.addEventListener("click", () => {

      if (music.paused) {
        music.play();
      } else {
        music.pause();
      }

    });

  }

  /* ======================================
      SERVICE CARD
  ====================================== */

  const serviceCards = document.querySelectorAll(".service-card");

  if (serviceCards.length > 0) {

    serviceCards.forEach(card => {

      card.addEventListener("click", () => {

        serviceCards.forEach(c => {

          if (c !== card) {
            c.classList.remove("active");
          }

        });

        card.classList.toggle("active");

        card.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest"
        });

      });

      const iframe = card.querySelector("iframe");

      if (iframe) {

        iframe.addEventListener("click", (e) => {
          e.stopPropagation();
        });

      }

      card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = -(y - rect.height / 2) / 30;
        const rotateY = (x - rect.width / 2) / 30;

        card.style.transform =
          `rotateX(${rotateX}deg)
           rotateY(${rotateY}deg)
           scale(1.03)`;

      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });

    });

  }

  /* ======================================
      SCROLL ANIMATION
  ====================================== */

  const elements = document.querySelectorAll(".service-card, .schedule-card");

  if (elements.length > 0) {

    const observer = new IntersectionObserver(entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

        }

      });

    }, {
      threshold: 0.2
    });

    elements.forEach(el => observer.observe(el));

  }

  /* ======================================
      FREIGHT FILTER
  ====================================== */

  const searchInput = document.getElementById("searchInput");
  const commodityFilter = document.getElementById("commodityFilter");
  const sortFilter = document.getElementById("sortFilter");
  const resetFilter = document.getElementById("resetFilter");
  const freightGrid = document.querySelector(".freight-grid");

  if (
    searchInput &&
    commodityFilter &&
    sortFilter &&
    resetFilter &&
    freightGrid
  ) {

    const freightCards = document.querySelectorAll(".freight-card");

    function filterCards() {

      const searchValue = searchInput.value.toLowerCase();
      const commodityValue = commodityFilter.value;
      const sortValue = sortFilter.value;

      let visibleCards = [];

      freightCards.forEach(card => {

        const route = card.dataset.route.toLowerCase();
        const commodity = card.dataset.commodity;
        const type = card.dataset.type;

        let show = true;

        if (!route.includes(searchValue)) {
          show = false;
        }

        if (
          commodityValue !== "all" &&
          commodity !== commodityValue
        ) {
          show = false;
        }

        if (
          sortValue === "air" &&
          type !== "air"
        ) {
          show = false;
        }

        if (
          sortValue === "ocean" &&
          type !== "ocean"
        ) {
          show = false;
        }

        card.style.display = show ? "block" : "none";

        if (show) {
          visibleCards.push(card);
        }

      });

      if (sortValue === "fastest") {

        visibleCards.sort((a, b) =>
          Number(a.dataset.days) - Number(b.dataset.days)
        );

      }

      if (sortValue === "slowest") {

        visibleCards.sort((a, b) =>
          Number(b.dataset.days) - Number(a.dataset.days)
        );

      }

      visibleCards.forEach(card => {

        freightGrid.appendChild(card);

      });

    }

    searchInput.addEventListener("keyup", filterCards);
    commodityFilter.addEventListener("change", filterCards);
    sortFilter.addEventListener("change", filterCards);

    resetFilter.addEventListener("click", () => {

      searchInput.value = "";
      commodityFilter.value = "all";
      sortFilter.value = "default";

      filterCards();

    });

    filterCards();

  }

});


/* ======================================
    SCHEDULE TAB
====================================== */

function showSchedule(type) {

  const exportBox = document.getElementById("exportSchedule");
  const importBox = document.getElementById("importSchedule");
  const tabs = document.querySelectorAll(".schedule-tab");

  if (!exportBox || !importBox || tabs.length === 0) {
    return;
  }

  tabs.forEach(tab => tab.classList.remove("active"));

  if (type === "export") {

    exportBox.style.display = "block";
    importBox.style.display = "none";

    tabs[0].classList.add("active");

  } else {

    exportBox.style.display = "none";
    importBox.style.display = "block";

    tabs[1].classList.add("active");

  }

}