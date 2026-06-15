//inheritance
class Animal{
    constructor(name){
this.name =name;
    }
    sound(){
        console.log(this.name+" "+"Dog is barking");
    }
}
class Dog extends Animal{
constructor(name,bread){
    super(name);
    this.bread =bread;
}
breadType()
{
    console.log(this.name+" "+this.bread);
}

}

let dogs = new Dog("Pinky","pom");
dogs.breadType();
dogs.sound();
dogs = new Dog("oreo");
dogs.sound();