(()=>{var e={342:()=>{!function(){const e=document.querySelectorAll("p[data-login]");document.querySelectorAll("p[data-login] input").forEach(((t,s)=>{t.addEventListener("focus",(()=>{e[s].querySelector("span").classList.add("is-focus")})),t.addEventListener("blur",(()=>{e[s].querySelector("span").classList.remove("is-focus")}))}))}(),function(){const e=document.querySelector("input#password"),t=document.querySelector("input#password ~ span"),s=document.querySelector("svg[data-eye='close']"),o=document.querySelector("svg[data-eye='open']");t.addEventListener("click",(()=>{"password"===e.type?(e.type="text",s.classList.remove("is-visible"),o.classList.add("is-visible")):(e.type="password",s.classList.add("is-visible"),o.classList.remove("is-visible"))}))}(),function(){const e=document.querySelectorAll(".form button"),t=document.querySelector(".auth__title span");e.forEach((e=>{e.addEventListener("mouseover",(()=>{t.classList.add("is-hover")})),e.addEventListener("mouseout",(()=>{t.classList.remove("is-hover")}))}))}(),function(){const e=document.querySelector(".form--login"),t=document.querySelector(".form--registration");document.querySelectorAll(".form__no-account a").forEach((s=>{s.addEventListener("click",(()=>{e.classList.toggle("flipped"),t.classList.toggle("flipped")}))}))}()},548:()=>{document.querySelectorAll("form").forEach((e=>{e.addEventListener("submit",(e=>{e.preventDefault()}))}))}},t={};function s(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,s),c.exports}(()=>{"use strict";s(342),s(548)})()})();