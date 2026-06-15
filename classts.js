"use strict";
//parameter constructor
class SampleTest {
    version;
    constructor(version) {
        this.version = version;
    }
    printversion() {
        console.log("this is version" + this.version);
    }
}
let sample1 = new SampleTest(456);
sample1.printversion();
//non parameter constuctor
class Student {
    name;
    constructor() {
        this.name = "Rachana";
    }
    print() {
        return this.name;
    }
}
let student = new Student();
console.log(student.print());
//parameter constructor
class Child {
    a;
    b;
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    add() {
        let c = this.a + this.b;
        return c;
    }
}
let child = new Child(5, 6);
console.log(child.add());
