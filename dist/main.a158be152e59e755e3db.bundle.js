(()=>{var e={342:()=>{function e(e,t,o){e.classList.toggle(o),t.classList.toggle(o)}window.addEventListener("load",(()=>{document.body.classList.remove("auth--preload")})),function(){const e=document.querySelectorAll("p[data-input='parent']");document.querySelectorAll("p[data-input='parent'] input").forEach(((t,o)=>{t.addEventListener("focus",(()=>{e[o].querySelector("span").classList.add("form__input-span--is-focus")})),t.addEventListener("blur",(()=>{e[o].querySelector("span").classList.remove("form__input-span--is-focus")}))}))}(),function(){const t=document.querySelectorAll("input[data-input='password']"),o=document.querySelectorAll("input[data-input='password'] ~ span"),n=document.querySelectorAll("svg[data-eye='close']"),s=document.querySelectorAll("svg[data-eye='open']");o.forEach(((o,r)=>{o.addEventListener("click",(()=>{"password"===t[r].type?(t[r].type="text",e(n[r],s[r],"form__input-svg--is-visible")):(t[r].type="password",e(n[r],s[r],"form__input-svg--is-visible"))}))}))}(),function(){const e=document.querySelectorAll(".form button"),t=document.querySelector(".auth__title span");e.forEach((e=>{e.addEventListener("mouseover",(()=>{t.classList.add("auth__title-span--is-hover")})),e.addEventListener("mouseout",(()=>{t.classList.remove("auth__title-span--is-hover")}))}))}(),function(){const e=document.querySelector(".form--login"),t=document.querySelector(".form--registration");document.querySelectorAll(".form__no-account a").forEach((o=>{o.addEventListener("click",(()=>{e.classList.toggle("auth__form--is-flipped"),t.classList.toggle("auth__form--is-flipped")}))}))}()},557:()=>{function e(e,o,n){var s;o.textContent=e.value,t(e),s=n,document.querySelector(":root").style.setProperty("--font-size",`${s}px`)}function t(e){const t=(e.value-e.min)/(e.max-e.min)*100;e.style.background="linear-gradient(to right, #902bf5 "+t+"%, transparent "+t+"%)"}function o(e,t){e.addEventListener("click",(()=>{t.classList.contains("footer--is-open")?t.classList.remove("footer--is-open"):t.classList.add("footer--is-open")}))}function n(e,t){document.body.addEventListener("click",(o=>{t.contains(o.target)||e.contains(o.target)||t.classList.remove("footer--is-open")}))}!function(){const t=document.querySelector("#font-size"),o=document.querySelector(".settings__font-size-value");localStorage.getItem("font-size")&&(t.value=localStorage.getItem("font-size"),e(t,o,localStorage.getItem("font-size"))),t.addEventListener("input",(()=>{e(t,o,t.value),16==t.value?localStorage.removeItem("font-size"):localStorage.setItem("font-size",t.value)}))}(),t(document.querySelector("#font-size")),function(){const e=document.querySelector("#theme-color");localStorage.getItem("theme-color")&&(document.body.classList.add("white-theme"),e.checked=!0),e.addEventListener("change",(()=>{e.checked?(localStorage.setItem("theme-color","white"),document.body.classList.add("white-theme")):(localStorage.removeItem("theme-color"),document.body.classList.remove("white-theme"))}))}(),o(document.querySelector(".footer__settings-btn"),document.querySelector(".footer__settings")),o(document.querySelector(".footer__contacts-btn"),document.querySelector(".footer__contacts.contacts")),n(document.querySelector(".footer__settings-btn"),document.querySelector(".footer__settings")),n(document.querySelector(".footer__contacts-btn"),document.querySelector(".footer__contacts.contacts"))}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}(()=>{"use strict";o(342),o(557)})()})();