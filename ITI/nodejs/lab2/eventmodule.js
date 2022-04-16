const util=require('util');
const emitter=require('events');
function greet()
{
 this.greeting="hello";


}
util.inherits(greet,emitter);

module.exports=greet;