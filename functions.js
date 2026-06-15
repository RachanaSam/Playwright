function add()
{
    let a =5;
    let b =9;
    console.log(a+b);
}
add();

function sub( c , d)
{
    console.log(c-d);
}
sub(8 , 3);

function multipy(g,h)
{
    return g*h;
}

let result = multipy(6,7);
console.log(result);

function division(x,y)
{
    return x/y;
}
console.log(division(45,5));

let sum =(a,b)=> a+b
console.log(sum(5,6));


function evenOrOdd(x)
{

if(x%2 == 0)
{
    console.log("Number is even");
}
else
{
    console.log("Number is odd");
}
}
evenOrOdd(9);
