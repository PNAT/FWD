const SCROLL_UP_CLASS = "is-scrolling-up";
const SCROLL_DOWN_CLASS = "is-scrolling-down";

export const headerScroll = {
  lastScroll: 0,
  detectScroll: function() {
    const currentScroll = window.pageYOffset;
    if (currentScroll == 0) {
      document.body.classList.remove(SCROLL_UP_CLASS);
      return;
    }

    if (currentScroll > this.lastScroll && !document.body.classList.contains(SCROLL_DOWN_CLASS)) {
      document.body.classList.remove(SCROLL_UP_CLASS);
      document.body.classList.add(SCROLL_DOWN_CLASS);
    } else if (currentScroll < this.lastScroll && document.body.classList.contains(SCROLL_DOWN_CLASS)) {
      document.body.classList.remove(SCROLL_DOWN_CLASS);
      document.body.classList.add(SCROLL_UP_CLASS);
    }
    this.lastScroll = currentScroll;
  },
  init: function() {
    window.addEventListener("scroll", this.detectScroll);
  },
};
