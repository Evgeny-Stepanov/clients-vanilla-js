(()=>{var e={342:()=>{window.addEventListener("load",(()=>{document.body.classList.remove("preload")})),function(){const e=document.querySelectorAll("p[data-input='parent']");document.querySelectorAll("p[data-input='parent'] input").forEach(((t,s)=>{t.addEventListener("focus",(()=>{e[s].querySelector("span").classList.add("is-focus")})),t.addEventListener("blur",(()=>{e[s].querySelector("span").classList.remove("is-focus")}))}))}(),function(){const e=document.querySelectorAll("input[data-input='password']"),t=document.querySelectorAll("input[data-input='password'] ~ span"),s=document.querySelectorAll("svg[data-eye='close']"),o=document.querySelectorAll("svg[data-eye='open']");t.forEach(((t,r)=>{t.addEventListener("click",(()=>{"password"===e[r].type?(e[r].type="text",s[r].classList.toggle("is-visible"),o[r].classList.toggle("is-visible")):(e[r].type="password",s[r].classList.toggle("is-visible"),o[r].classList.toggle("is-visible"))}))}))}(),function(){const e=document.querySelectorAll(".form button"),t=document.querySelector(".auth__title span");e.forEach((e=>{e.addEventListener("mouseover",(()=>{t.classList.add("is-hover")})),e.addEventListener("mouseout",(()=>{t.classList.remove("is-hover")}))}))}(),function(){const e=document.querySelector(".form--login"),t=document.querySelector(".form--registration");document.querySelectorAll(".form__no-account a").forEach((s=>{s.addEventListener("click",(()=>{e.classList.toggle("flipped"),t.classList.toggle("flipped")}))}))}()},548:()=>{document.querySelectorAll("form").forEach((e=>{e.addEventListener("submit",(e=>{e.preventDefault()}))}))}},t={};function s(o){var r=t[o];if(void 0!==r)return r.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,s),n.exports}(()=>{"use strict";s(342),s(548)})()})();