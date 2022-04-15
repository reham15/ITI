function getAge(dateString) {
    
    var today = new Date();
    var birthDate = new Date(dateString);
    if (birthDate.getFullYear()===2021)
    throw  new Error("enter a valid date")
    
    else
    {var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;}
}



var greet =function(name,birth_date)
{

var age=getAge(birth_date)

 return  `hello ${name} your age is ${age}`;

}

module.exports=greet;