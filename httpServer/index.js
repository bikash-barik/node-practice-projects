const http = require("http");
const { type } = require("os");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    const data =  fs.readFileSync(`${__dirname}/UserApi/userapi.json`,"utf-8");
    const objData = JSON.parse(data);   



    if(req.url == "/"){

    res.end("Home page");

    }else if(req.url == "/about"){
    res.end("About page");

    }else if(req.url == "/userapi"){
        // fs.readFile(`${__dirname}/UserApi/userapi.json`,"utf-8",(err, data) =>{
        //     console.log(data);
        //     // const data =  fs.readFile(`${__dirname}/UserApi/userapi.json`,"utf-8");
        //     const objData = JSON.parse(data);   
        //     res.end(objData[5].title);

        // });
        res.writeHead(200, {"content-type": "application/json"});
        res.end(objData[5].title);

    }else{
    res.writeHead(404, {"content-type" :"text/html"});    
    res.end("<h1>404 error page</h1>");
}
})

server.listen(8000, "127.0.0.1",()=>{
    console.log("Listening to the port no 8000");
});



