var add=function(a,b)

{

if(isNaN(a)||isNaN(b))
{console.log("error ,please enter numbers");
return NaN
}
else
return a+b;

}


var sub=function(a,b)

{

if(isNaN(a)||isNaN(b))
{console.log("error ,please enter numbers");
return NaN
}
else
return a-b;

}
var mul=function(a,b)

{

if(isNaN(a)||isNaN(b))
{console.log("error ,please enter numbers");
return NaN
}
else
return a*b;

}
module.exports={
add:add,
sub:sub,
mul:mul




}