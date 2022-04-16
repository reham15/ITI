
//part1

const greet=require("./eventmodule");
const greeter=new greet();
greeter.on('greet',(data)=>{

console.log(data);

});
greeter.emit('greet',"hello");


//part3
//rename file to info.txt
const fs=require("fs");
// fs.rename('test.txt', 'info.txt', (err) => {
//     if (err) throw err;
//     console.log('Rename complete!');
//   });

  //part4
// remove data from info.txt
  fs.truncate('info.txt', (err) => {
    if (err) throw err;
    console.log('file  was truncated');
  });

  //part5
  //READ ASYNC
  fs.readFile('data.json', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });

  //READ SYNC
  let data=fs.readFileSync('data.json');
    console.log(data.toString());
 //part6

 fs.writeFile("info.txt","hello iti","utf8",(err)=>{

if(err)
throw err;

 });

 //part7 bouns
 fs.mkdir('./dir', { recursive: true }, (err) => {
    if (err) throw err;
  });
