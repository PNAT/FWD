const ACTIVE_CLASS = "is-active";
const SECTION_CLASS = ".section";
const OPTIONS = {
  threshold: 0.55,
};

export const navigation = {
  changeNav: function(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
        const activeEl = document.querySelector(`.${ACTIVE_CLASS}`);

        if (activeEl) activeEl.classList.remove(ACTIVE_CLASS);

        const id = entry.target.getAttribute("id");
        const idEl = document.querySelector(`[href="#${id}"]`);

        if (idEl) idEl.classList.add(ACTIVE_CLASS);
      }
    });
  },
  init: function() {
    const observer = new IntersectionObserver(this.changeNav, OPTIONS);
    const sections = document.querySelectorAll(SECTION_CLASS);
    sections.forEach((section) => {
      observer.observe(section);
    });
  },
};
