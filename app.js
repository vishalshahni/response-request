const http = require('http');


const server = http.createServer((req,res)=>{
    res.setHeader('content-type','text-html');
    const url = req.url;

    if(url=='/home'){
        res.statusCode = 200;
        res.end("<h1>Welcome home</h1>");
    }else{

    
    if(url=='/about'){
        res.statusCode=200;
        res.end("<h1>Welcome to About Us</h1>")
    }
    else if(url=='/node'){
        res.statusCode = 200;
        res.end("<h1>Welcome to my Node Js project</h1>")
    }else{
        res.statusCode=404;
        res.end("<h1>Page Not Found</h1>")
    }
}
})

let port = 3000;

server.listen(port,()=>{
    console.log("server working");
});