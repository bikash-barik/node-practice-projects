const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true})); 

app.get("/", function(req, res){
    res.send("Welcome to my channel :)");
})


app.get("/contactus", function(req, res){
    res.send("This is contactus page")
})

app.get("/home", function(req, res){
    res.send("Welcome to home page");
})


app.get("/About", function(req, res){
    res.send("This is About page")
})


app.get("/calculator", function(req, res){
    res.sendFile(__dirname + "/index.html");
})


app.post("/calculator", function(req, res){
    // res.send("Send file");
    console.log(req.body)
    let n1 = Number(req.body.v1);
    let n2 = Number(req.body.v2);
    let sum = n1 + n2;

    res.send("Addition of two number is :"+ sum);
})


app.get("/bmi",function(req,res){
    res.sendFile(__dirname + "/bmi.html");
})

app.post("/bmi", function(req, res){
    console.log(req.body);
    let n1 = Number(req.body.h);
    let n2 = Number(req.body.w);
    let bmi = n2 / (n1 * n1);
    res.send("Your Body mass index (BMI)  is :"+ bmi);

})

app.listen(8000, function(req,res){
    console.log("Server is running at 8000 port");

});
 