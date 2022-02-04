
const http= require("http")

const url = require("url")// importing url Module c


http.createServer((request, response)=>{
    //parsing the url using the url module to path and 
    // query string and storing as an object

    const reqUrl = url.parse(request.url,true);
    console.log("requrl", JSON.stringify(reqUrl));

    console.log("query Sting ",JSON.stringify(reqUrl.query));
     // write some qurery string in the url of  browser and click on Raw 

    response.write("hello world");
    response.write("welcome");
    response.write(JSON.stringify(reqUrl.query))

    response.end();

}).listen(2000, ()=>{
    console.log("Listening on port 2000");
});