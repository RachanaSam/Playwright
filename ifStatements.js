let age =18;
if(age >= 18)
{
    console.log("Eligiable");
}

let age2 =5;
if(age2 >= 18)
{
    console.log("Eligiable for Licence");
}
else
{
    console.log(" Not Eligiable");
}

let mark = 40;
if(mark>=90)
{
    console.log("Grad A");
}
else if(mark >= 60)
{
console.log("Grad B");
}
else
{
    console.log("Grade C");
}

let va =77;
if (va === 6)
{
    console.log("Equal");
}
else{
    console.log("not Equal");
}

let yy =9;
if(yy%2 === 0)
{
    console.log("Even");
}
else
{
    console.log("odd");
}

let l =89;
let m= 77;
let operator ="-";
if(operator === "+")
{
    console.log(l+m);
}
else if(operator === "*")
{
    console.log(l*m);
}
else if(operator === "/")
{
     console.log(l/m);
}
else
{
     console.log(l-m);
}

let r = 30;
if(r%2 ===0 && r%5 === 0)
{
    console.log("Divisiable by Both")
}
else
{
    console.log("NotDivisiable");
}

let s=6, t=8, u=10;

if(s>t && s>u)
{
console.log(s +" is greater");
}
else if(t>u)
{
  console.log(t +" is greater");  
}
else
{
    console.log(u +" is greater");
}


let w=90;
switch(w)
{
    case 1: console.log("1");
    case 22:console.log("22");
    case 90:console.log("90");
    break;
    default:console.log("Invalid");
}