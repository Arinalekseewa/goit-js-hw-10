import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as i,i as l}from"./assets/vendor-A92OCY9B.js";let s;const n=document.querySelector("[data-start]"),d=document.querySelector("#datetime-picker"),u=document.querySelector("[data-days]"),m=document.querySelector("[data-hours]"),f=document.querySelector("[data-minutes]"),h=document.querySelector("[data-seconds]");n.disabled=!0;i("#datetime-picker",{enableTime:!0,dateFormat:"Y-m-d H:i",defaultDate:new Date,minuteIncrement:1,time_24hr:!0,locale:{firstDayOfWeek:1},onClose(t){if(t.length===0)return;const e=t[0];e<new Date?(l.show({message:"Please choose a date in the future",messageColor:"#FFFFFF",iconColor:"#FFFFFF",backgroundColor:"#EF4040",position:"topRight"}),n.disabled=!0):(s=e,n.disabled=!1,console.log("Обрана дата:",s))}});n.addEventListener("click",()=>{F.start(),n.disabled=!0,d.disabled=!0});const F={intervalId:null,start(){this.intervalId=setInterval(()=>{const t=Date.now(),e=s-t;if(e<=0){clearInterval(this.intervalId),n.disabled=!1,d.disabled=!1;return}const o=p(e);y(o)},1e3)}};function p(t){const e=a(Math.floor(t/864e5)),o=a(Math.floor(t%(1e3*60*60*24)/(1e3*60*60))),r=a(Math.floor(t%(1e3*60*60)/(1e3*60))),c=a(Math.floor(t%(1e3*60)/1e3));return{days:e,hours:o,mins:r,secs:c}}function a(t){return String(t).padStart(2,"0")}function y({days:t,hours:e,mins:o,secs:r}){u.textContent=t,m.textContent=e,f.textContent=o,h.textContent=r}
//# sourceMappingURL=1-timer.js.map
