let employ ={
    firstname :"Rachana",
    lastname: "Sam",
    Id:500,
    fullname:function(){
        return this.firstname+" "+this.lastname;
    }
}
console.log(employ.firstname +" "+employ.lastname);

//Bracket Notation
console.log(employ["firstname"]+ " "+employ["lastname"]);
console.log(employ.fullname());

//adding new property
employ.gender = "female",
console.log(employ.gender);
//remove a property
delete employ.gender;
console.log(employ.gender);
