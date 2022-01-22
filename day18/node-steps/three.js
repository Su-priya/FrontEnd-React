let http = require("http");
// let fs = require("fs");
let server = http.createServer(function(req, res){
  
/*     res.write("<!DOCTYPE html><html lang=\"en\">");
    res.write("<head> <meta charset='UTF-8'> <meta http-equiv='X-UA-Compatible' content='IE=edge'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>Document</title></head>");
    res.write("<body>");
        res.write("<h1>"); */
            res.write("Welcome to your life");
/*         res.write("</h1>");
    res.write("</body>");
    res.write("</html>"); */
    res.end();
});

server.listen(5050);
console.log("Server is now live on localhost:5050")

