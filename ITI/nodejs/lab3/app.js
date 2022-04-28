

var http = require('http')
var fs = require('fs')
const pathsync = require("path");
http.createServer(function(req, res){

    if(req.url==='/' && req.method==='GET')
    {
        res.writeHead(200, {'content-type': "text/html"})
        var html = fs.readFileSync('homepage.html')
         res.write(html)
    }
    

    else if(req.url==='/signup' && req.method==='POST' ){
        req.on('data', obj => {
            body += obj;
           
       let rawdata = fs.readFileSync(pathsync.resolve(__dirname, 'user.txt'));
        console.log(rawdata);
           let iti = JSON.parse(rawdata);
           console.log(iti);
            console.log(`chunk : ${obj}`);
               if(iti.email===obj.email || iti.name===obj.name || iti.password===obj.password){
               res.writeHead(400, {'content-type': "text/plain"});
               res.write("user already exist");
           } else {
              
               res.writeHead(200, {'content-type': "application/json"})
               fs.writeFileSync(pathsync.resolve(__dirname, './user.txt'), obj);
               console.log("finish writiing");
               console.log((obj));
               res.end();
           }
            })
}
    else if (req.url==='/login' && req.method==='POST'){
        var body=" ";
        req.on('data', obj => {
            body += obj;
            let bodyj =JSON.parse(body);
            let rawdata = fs.readFileSync(pathsync.resolve(__dirname, 'user.txt'));
            let iti = JSON.parse(rawdata);
            if (bodyj.email != iti.email) {
                res.writeHead(400, {'content-type': "application/json"})
                message="the email is wrong";
            } else if (bodyj.password != iti.password) {
                res.writeHead(400, {'content-type': "application/json"})
                message="the password is wrong";
            } else {
                res.writeHead(200, {'content-type': "application/json"})
                message = bodyj.name;
            }
            res.writeHead(200, {'content-type': "text/html"})
            var html = fs.readFileSync('./login.html', 'utf8');
            html = html.replace('{message}', message);
            console.log("welcome "+message);
            res.end();
        })
}
    

    else
    {
        res.writeHead(404)
        res.write('page is not found');
        message="page not found";
    }
    res.end()

}).listen(3000)
