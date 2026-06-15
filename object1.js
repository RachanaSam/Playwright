//creating a structure that store data asa key value pair
const student =
{
    name : "Rachana",// Key value pair is called JSON format
    Id: 100,

    detail :()=>
    {
        console.log("hello");
       
    }
}
student.detail();
 console.log(student.name+ " "+student.Id);


 const employ ={
    name:"Rachana",
    Id :200,

    detail(){
    console.log(this.name+" "+this.Id)

    }
 
 }
 employ.detail();