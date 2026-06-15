//class 
class Student{
    constructor(name,id){
this.name = name;
this.id =id;
    }
    details(){
        console.log(this.name+" "+this.id);
    }
}
const student1 =new Student("Rachana",600);
student1.details();
const student2 = new Student("Sam",200);
student2.details();
const student3 = new Student("Rani",900);
student3.details();