var http = require("http");
var dt = require("./myModule");
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    //use the module to get date and time
    res.write("Todays Date and time is:"+dt.myDateTime());
    //res end
    res.end();
}).listen(8000);//server listens on port 8000