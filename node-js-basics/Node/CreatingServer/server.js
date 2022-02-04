
const http = require('http');

const server = http.createServer((request,response)=>{

    console.log("Request was successsful ");

    console.log('request',request);

    console.log('response',response);


    response.end("welocome to node.js");
})


server.listen(2000,()=>{
    console.log("server is listening on port number");
});

