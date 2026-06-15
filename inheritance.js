class InParent
{
    add()
    {
        console.log(5+6);
    }
}

class InChild extends InParent
{
sub()
{
    console.log(9-6);
}
}
let obj = new InChild();
obj.sub();
obj.add();

class Person
{
    constructor(na)
    {
this.na = na;

    }
    display()
    {
        console.log(this.na);
    }
}
class Student extends Person
{
print()
{
    console.log("age=20");

}
}
let obj1 = new Student("Rachana");
//let obj2 = new Person("Rachana");
obj1.display();
obj1.print();

//obj2.display();
/*
class Shape
{
    areaOfCircle(ra)
    {
       let r =ra;
        console.log(3.14*r*r);
    }
}
class Rectangle extends Shape
{
    areaOfRectangle(length,breadth)
    {
        length =l;
        breadth = b;
        console.log(l*b);
    }
    print()
    {

    }
}
let rec = new Rectangle();
rec.areaOfCircle(5);
rec.areaOfRectangle(3,7);
*/
class EmpNam
{
    constructor(name)
    {
        this.name =name;
    }
}
 
class EmpSal extends EmpNam
{
    constructor(name,salary)
    {
       super(name);
       this.salary = salary;
    }
    display()
    {
        console.log(this.name,this.salary);
    }
}
let sal = new EmpSal("Rachana",410000);
