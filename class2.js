//using getter methods
class Student {
    age =10;
    get location(){
        return "India";
    }
constructor(name,id){
this.name =name;
this.id =id;
    }
person(){
    console.log(this.name+" "+this.id);
}
}
const student1 = new Student("Rachana",30);
student1.person();
console.log(student1.age);
console.log(student1.location);
