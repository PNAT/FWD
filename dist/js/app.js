!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=1)}([function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist/",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n(1);var i="Sal was not initialised! Probably it is used in SSR.",s="Your browser does not support IntersectionObserver!\nGet a polyfill from here:\nhttps://github.com/w3c/IntersectionObserver/tree/master/polyfill",c={rootMargin:"0% 50%",threshold:.5,animateClassName:"sal-animate",disabledClassName:"sal-disabled",enterEventName:"sal:in",exitEventName:"sal:out",selector:"[data-sal]",once:!0,disabled:!1},a=[],l=null,u=function(e){e&&e!==c&&(c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},c,{},e))},d=function(e){e.classList.remove(c.animateClassName)},f=function(e,t){var n=new CustomEvent(e,{bubbles:!0,detail:t});t.target.dispatchEvent(n)},b=function(){document.body.classList.add(c.disabledClassName)},p=function(){l.disconnect(),l=null},m=function(){return c.disabled||"function"==typeof c.disabled&&c.disabled()},v=function(e,t){e.forEach((function(e){e.intersectionRatio>=c.threshold?(function(e){e.target.classList.add(c.animateClassName),f(c.enterEventName,e)}(e),c.once&&t.unobserve(e.target)):c.once||function(e){d(e.target),f(c.exitEventName,e)}(e)}))},y=function(){b(),p()},g=function(){document.body.classList.remove(c.disabledClassName),l=new IntersectionObserver(v,{rootMargin:c.rootMargin,threshold:c.threshold}),(a=[].filter.call(document.querySelectorAll(c.selector),(function(e){return!function(e){return e.classList.contains(c.animateClassName)}(e,c.animateClassName)}))).forEach((function(e){return l.observe(e)}))},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};p(),Array.from(document.querySelectorAll(c.selector)).forEach(d),u(e),g()};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;if(u(e),"undefined"==typeof window)return console.warn(i),{elements:a,disable:y,enable:g,reset:O};if(!window.IntersectionObserver)throw b(),Error(s);return m()?b():g(),{elements:a,disable:y,enable:g,reset:O}}},function(e,t,n){}]).default},function(e,t,n){n(2),e.exports=n(3)},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i={threshold:.55},s={changeNav:function(e){e.forEach((function(e){if(e.isIntersecting&&e.intersectionRatio>=.55){var t=document.querySelector(".".concat("is-active"));t&&t.classList.remove("is-active");var n=e.target.getAttribute("id"),r=document.querySelector('[href="#'.concat(n,'"]'));r&&r.classList.add("is-active")}}))},init:function(){var e=new IntersectionObserver(this.changeNav,i);document.querySelectorAll(".section").forEach((function(t){e.observe(t)}))}};({lastScroll:0,detectScroll:function(){var e=window.pageYOffset;0!=e?(e>this.lastScroll&&!document.body.classList.contains("is-scrolling-down")?(document.body.classList.remove("is-scrolling-up"),document.body.classList.add("is-scrolling-down")):e<this.lastScroll&&document.body.classList.contains("is-scrolling-down")&&(document.body.classList.remove("is-scrolling-down"),document.body.classList.add("is-scrolling-up")),this.lastScroll=e):document.body.classList.remove("is-scrolling-up")},init:function(){window.addEventListener("scroll",this.detectScroll)}}).init(),s.init(),o()()},function(e,t){}]);