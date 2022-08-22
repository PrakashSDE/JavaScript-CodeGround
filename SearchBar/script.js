
const a=document.querySelector(".search-bar-magnifier");
const b=document.querySelector(".magnifier");

b.addEventListener("click",() => {
    a.classList.toggle("active1");      
});



const c=document.querySelector(".search-bar-container");

c.addEventListener("click",() => {
    c.classList.toggle("active2");      
});



const d=document.querySelector(".search-bar-mic-icon");
const e=document.querySelector(".mic");

e.addEventListener("click",() => {
    d.classList.toggle("active3");      
});



