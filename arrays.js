let arr=[3,4,5];
console.log(arr);

let g= Array(2,3,4,5)
console.log(g);
console.log(g.length);

let f =Array(3);
console.log(f);

let n = Array(2);
n.push(6);
n.push(8);
console.log(n);
n.push(5,6,78,54,21);
console.log(n);
console.log(n.length);


let s=['u',45,8.9,"hello"];
console.log(s.indexOf(8.9));


let num =[44,65,77,12];
let newfilter=num.filter(g=>g%2==0)
console.log(newfilter);


let so=[34,55,11,23,100];

console.log(so.sort());
so.sort((a,b)=>a-b)
console.log(so);

so.sort((a,b)=>a+b)
console.log(so);


let ki =["Rachana", "Anu", "Sara"];
console.log(ki.sort());
console.log(ki.sort().reverse());