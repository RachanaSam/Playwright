const student =
{
    name:"Rachana",
    age :30,
    Department : "ComputerScience"
}
console.log(student);
console.log(student.age);

const person =
{
    name : "Sam",
    city :"Dublin",

   greeting : function() 
{
console.log("hello");
}
}
person.greeting();

const car =
{
    brand :"BMW",
    price :"9L"
}
car.colour = "Red";
console.log(car);

car.price = "8L";
console.log(car);
delete car.price;
console.log(car);

const product =
{
    name :"Laptop",
    price :50000,
    quantity : 4,

    total : function()
    {
        let totalPrice = product.price * product.quantity
        console.log(totalPrice);
    }
}
product.total();

const flower =
{
    name :"Rose",
    colour :"Red",
    price :"€2"
}
for(const key in flower)
{
    //console.log(key);
    //console.log(flower[key]);
     console.log(key +" " + flower[key]);
}

