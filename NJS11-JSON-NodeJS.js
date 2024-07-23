const fs = require("fs");
const bioData = {
    name: "Rahul",
    age: 20,
    address: "Ongole",
    hobbies: ["Cricket", "sleeping", "Watching Movies"]

};
console.log(bioData);
const jsonData = JSON.stringify(bioData);
fs.writeFile("testjson.json",jsonData,(err)=>{
    console.log("Process completed");
});
console.log(jsonData)
fs.readFile("testjson.json","utf-8",(err,data)=>{
    console.log(data);
})