const express = require('express');
const app = express();
const path = require("path");
const fs = require("fs");
const pathsync = require("path");

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/static', express.static("static"));

app.get('/', function (req, res) {
  
    res.sendFile(path.join(__dirname, '/homepage.html'));
})


app.post('/signup', function(req, res) {
    obj=req.body;
    
    let rawdata = fs.readFileSync(path.resolve(__dirname, 'user.txt'));
   let filedata = JSON.parse(rawdata);
    console.log(filedata);
        if(filedata.email===obj.email || filedata.name===obj.name || filedata.password===obj.password){
            res.send('<html><head></head><body><h1>user already exist</h1></body>');
    }
    else{
           
            fs.writeFileSync(pathsync.resolve(__dirname, './user.txt'),JSON.stringify(req.body));
            res.sendFile(path.join(__dirname, '/signup.html'));
    }
});

app.post("/login", (req, res) => {
    obj=req.body;
    let rawdata = fs.readFileSync(path.resolve(__dirname, 'user.txt'));
    let filedata = JSON.parse(rawdata);
    if (obj.email != filedata.email) {
        res.send('<html><head></head><body><h1>the email is wrong</h1></body>');
    } else if (obj.password != filedata.password) {
        res.send('<html><head></head><body><h1>the password is wrong</h1></body>');
    } else {
        res.sendFile(path.join(__dirname, '/login.html'));
    }
})


app.get('*', function (req, res) {
    res.sendFile(__dirname+'/error.html');
})
app.post('*', function (req, res) {
    res.sendFile(__dirname+'/error.html');
   
})
app.listen(3000)