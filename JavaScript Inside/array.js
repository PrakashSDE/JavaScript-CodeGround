const a = [5454,"tfdjshjf",45555555555555];

const b =Array.of(5454,"tfdjshjf",45555555555555);

const c=Array(50).fill("Java Script");

for(let i=0; i<a.length;i++){
          console.log(a[i]);
}
console.log(a);
console.log(b);
console.log(c);

a.push(6525,588,"push");
a.unshift("unshift",110,455,);
console.log(a);

a.pop();
a.shift();
console.log(a)


const d=[12,25,555.2];
const e=[1,2,5.2];
const f=d.concat(e);
console.log(f);


f.find(( element, index, array) => {
          return true;
         })

