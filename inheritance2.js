class Parent{
   constructor(a,b){
this.a =a;
   this.b = b;
   } 
sum()
{
   
    console.log(this.a+this.b);
}
}
class Child extends Parent{
    constructor(a,b){
      //  this.a =a;
  // this.b = b;
      super(a,b);
 super.sum(a,b);
    }
sub()
{
    console.log(this.a - this.b);
}
}

let obj =new Child(6,8);
obj.sub();
