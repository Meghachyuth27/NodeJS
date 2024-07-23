const https = require("https");
https.get("https://jsonplaceholder.typicode.com/todos/2",(resp)=>{
    let data = "";
    //A chunk of data has been received
    resp.on("data",(chunk)=>{
        data += chunk;        
    });
    resp.on("end",()=>{
        console.log(JSON.parse(data));
        console.log(data);
    });
}).on("error",(err)=>{
    console.log("Error: "+err.message);
});