class Student
{
    name = "Rachana";
    age = 30;

    display()
   {
    console.log(this.name);
    console.log(this.age);

   }
}
let obj = new Student();
obj.display();


class Employee
{
    name1 = "Roy";
    age1  = 55;

    salary()
    {
        console.log("Salary : 50000")
    }
    detailes()
    {
         console.log(this.name1) ;
           console.log(this.age1);
    }

   
}
 let obj1 = new Employee();
 obj1.detailes();


 //Constructor

 class car
 {
    constructor()
    {
        this.brand = "BMW";
        this.model = "A";
        this.price ="5L"
    }
 }
 let  obj3 = new car();
 console.log(obj3.model);
  console.log(obj3.brand);
   console.log(obj3.price);

 class DisplayVariable
 {
    constructor(a,b)
    {
        this.na = a;
        this.ag = b;
    }
    print()
    {
        console.log(this.name+" "+this.age);
    }
 }  

 let objvar = new DisplayVariable("Rachana",30);
 objvar.print();

 class Vechicle
 {
    constructor(a,b,c,d)
    {
        this.brand =a;
        this.model = b;
        this.price = c;
        this.year = d;
            }
            display()
            {
                console.log( this.brand +" "+
        this.model +" "+ this.price +" "+ this.year);
            }
 }
 let obj5 = new Vechicle("BMW","UP","8L","2015");
 obj5.display();

