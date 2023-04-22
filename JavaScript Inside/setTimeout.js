
function ThroughLet(){
      for(let i=1;i<=6;i++){
      setTimeout(function(){
          console.log(i);
          },i*1000)
}
}

function ThroughVar(){
     for (var j=1;j<=6;j++){
      function close(j){
     setTimeout(function(){
     console.log(j);
      },j*1000);
    }
    close(j);
    }
}


ThroughLet();
ThroughVar();