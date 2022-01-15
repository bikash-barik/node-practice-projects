const fs = require("fs");

const bioData = {
    name : "Bikash",
    age :25,
    channel :"Bikash Barik",
}
const jsonData = JSON.stringify(bioData);
console.log(jsonData);
// const normalData =JSON.parse(jsonData)
// console.log( normalData);


// fs.writeFile('json1.json',jsonData,(err)=>{
//     // console.log("done");
// })


fs.readFile("json1.json","utf-8",(err,data)=>{
    console.log(data);


    const orgData = JSON.parse(data);
    console.log(orgData)
})