const fs=require("fs");
const data = fs.readFileSync("MyData.txt","utf-8");
console.log(data)
fs.readFile("yello.txt","utf-8",(err,data)=>{
    console.log(data);
})