//Closer

function makeFunc() {
          var a = 'Closer';
          function displayName(){ 
            console.log(a);
          }         
         return displayName;// return function displayName(){ 
                           // console.log(a);}
        
        } 
        var z = makeFunc();
        console.log(z);
        z();