const fs = require("fs")
fs.writeFileSync('cmv.txt','Hello')
fs.readFile('cmv.txt','utf-8',(err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data)
});