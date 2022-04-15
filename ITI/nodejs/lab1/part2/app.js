var greet=require("./greet");
try{
console.log(greet("reham","1998-03-15"));
}
catch(e)
{
console.error(e.message);

}

try{
    console.log(greet("reham","2021-03-15"));
    }
    catch(e)
    {
    console.error(e.message);
    
    }