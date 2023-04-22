 //Scope of a Variable

 main();
 
 function main(){
       var a ="Hi," 
       console.log(a);    //console.log(a,b,c,d,e) is not applicable
       part1();

     function part1(){
          var b="JS Script";
          console.log(a,b);
          part2();

           function part2(){
               let c="I am"
               console.log(a,b,c);
               part3();
              
                  function part3(){
                    let d="Lexical Environment"
                    console.log(a,b,c,d);
                }
          }          
     }
 }

// This Whole process is called Scope Chain

   

