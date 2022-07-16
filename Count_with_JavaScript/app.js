let count =0;
  
const value= document.querySelector("#value");
  const decrease= document.querySelector(".btn_decrease");
  const increase= document.querySelector(".btn_increase");
  const reset= document.querySelector(".btn_reset");

  decrease.addEventListener("click" , function(){
    count--;
    value.textContent = count;
  });

  increase.addEventListener("click" , function(){
    count++;
    value.textContent = count;
  });

  reset.addEventListener("click" , function(){
    count=0;
    value.textContent = count;
  });
  



