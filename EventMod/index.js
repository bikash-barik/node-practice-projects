const EventEmitter = require("events");
const { isNumberObject } = require("util/types");
const event = new EventEmitter();

// event.on("sayMyName",()=>{
//     console.log("My name is Bikash");
// });

// event.on("sayMyName",()=>{
//     console.log("My name is Ram");
// });
// event.on("sayMyName",()=>{
//     console.log("My name is Ram kumar");
// });
// event.on("sayMyName",()=>{
//     console.log("My name is Biku");
// });

// event.emit('sayMyName');

event.on("statusCode", (sc , msg)=>{
    console.log(`Status  code is : ${sc}  Message is ${msg}`);
    console.log()
});

event.emit("statusCode", 200, "ok");




