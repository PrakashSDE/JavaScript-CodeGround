//function Statement||function Declaration
a();
function a(){
          console.log("function Statement or Declaration");
}
a();

//function Expression

//b() hear is not applicable in function experssion.
var b= function(){// The function with out name is called Anonymous function
     console.log("function expression");     
}
b();


//Named function experssion
var c= function d(){
          console.log("Named function expression");
          console.log(d);     
     }
     
c();
//d(); it is not applicable



//first class function
var e=function(param1,param2){
          return param1+param2;
}
console.log(e(52,4));



//callback function

setTimeout(function(){
          console.log("Callback function");
},5000);


//Higher Order Function
function f(){ // hear f is a callback function
          console.log("higher order function");
}

 function e(f){//hear e is the higher order function
    f();
 }

e();




//functional programming

const radius= [2,5,12,23];

const area = function(radius){
    return 2*Math.PI*radius;
}

const circumference = function(radius){
     return Math.PI*radius;     
}

const diameter = function(radius){
     return 2*radius;
}

const calculate= function(radius,logic){
     const output=[];
     for(let i=0;i<radius.length; i++){
          output.push(logic(radius[i]));
     } 
     return output;
}

console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));


//Arrow Function

const getData = (param1, param2) =>{
 console.log(param1, param2)
}
getData();




