import"./assets/styles-849ae2b1.js";import{f as p,i as b}from"./assets/vendor-77e16229.js";const u=document.getElementById("datetime-picker");let d,r;const D={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0],n=new Date,o=document.getElementById("start-btn");t<n?(b.error({message:"Please choose a date in the future",messageColor:"white",backgroundColor:"#EF4040",position:"topRight",messageSize:"16px",timeout:3e3}),o.disabled=!0):(o.disabled=!1,d=t)}};p("#datetime-picker",D);const h=document.getElementById("start-btn");h.addEventListener("click",E);function E(){h.disabled=!0,u.disabled=!0,d=new Date(u.value),r&&clearInterval(r),r=setInterval(f,1e3),f()}function I(e){const a=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),i=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:a,hours:c,minutes:i,seconds:y}}function m({days:e,hours:t,minutes:n,seconds:o}){const l=document.querySelector("[data-days]"),a=document.querySelector("[data-hours]"),c=document.querySelector("[data-minutes]"),i=document.querySelector("[data-seconds]");l.textContent=s(e),a.textContent=s(t),c.textContent=s(n),i.textContent=s(o)}function f(){const t=d-new Date;if(t<=0)clearInterval(r),u.disabled=!1,m({days:0,hours:0,minutes:0,seconds:0});else{const n=I(t);m(n)}}function s(e){return e<10?`0${e}`:e}
//# sourceMappingURL=commonHelpers.js.map
