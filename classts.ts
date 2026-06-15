//parameter constructor
class SampleTest{
    version:number
    constructor(version:number){
        this.version =version
    }
    printversion():void{
    console.log("this is version"+this.version)
}
}
let sample1 = new SampleTest(456)
sample1.printversion()

//non parameter constuctor

class Student{
    name:string
    constructor(){
        this.name ="Rachana"
    }
    print():string{
        return this.name
    }
}
let student = new Student()
console.log(student.print())

//parameter constructor

class Child{
   
    a:number
    b:number
    constructor(a:number, b:number){
        this.a =a 
        this.b =b
    }
    add():number{
       let c  = this.a +this.b
        return c

    }
}
let child = new Child(5,6)
console.log(child.add())

