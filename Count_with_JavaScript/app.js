let count =0;
  
const value= document.querySelector("#value");
  const decrease= document.querySelector(".btn_decrease");
  const increase= document.querySelector(".btn_increase");
  const reset= document.querySelector(".btn_reset");

  decrease.addEventListener("click" , function(){
    count--;
    value.textContent = count;
  });

  



