const http = require("http");

const  dataArray  = require("./data.js");

const fs = require("fs");

const url = require("url");

http
  .createServer((req, res) => {
    const reqUrl = url.parse(req.url,true); // storing the url in object form

    const path = reqUrl.pathname; // Accesing and storing the pathname into a variable


    if (path === "/data" && req.method === "GET") {
      // const data = fs.readFileSync('./data.js')

      res.writeHead(200, { "Content-type": "text/html" });
      res.end(JSON.stringify(dataArray));

      // fs.readFileSync('data.js',(err,data)=>{
      //   if(err){
      //    throw err;
      //   }
      //   else{
      //     res.writeHead(200,{'Content-type':'text/html'});
      //     res.write(data);
      //    return res.end()
      //   }
      //})
    }
    else if(path==="/data" && req.method==="POST")
    {
    // const id = reqUrl.query.id;
      
      dataArray.push(reqUrl.query);

      res.writeHead(200,{"Content-type":"text/html"});

      // write into the file
      fs.writeFileSync('./data.js',`const dataArray=${JSON.stringify(dataArray)}; module.exports=dataArray`)
      res.end(JSON.stringify(dataArray))
    }
    else if(path==="/data" && req.method==="PUT")
    {

     const index =  dataArray.findIndex((obj,index)=>{
        return obj.id === reqUrl.query.id
      })


      
      dataArray.splice(index,1,reqUrl.query)

      res.writeHead(200,{"Content-type":"text/html"});
      console.log(dataArray);

      // write into the file
      fs.writeFileSync('./data.js',`const dataArray=${JSON.stringify(dataArray)}; module.exports=dataArray`)
      res.end(JSON.stringify(dataArray))

    }
    else if(path==='/data' && req.method==="DELETE")
    {
      const index = dataArray.findIndex((obj)=>{
        return obj.id === reqUrl.query.id
      })

      dataArray.splice(index,1);

      fs.writeFileSync('./data.js',`const dataArray=${JSON.stringify(dataArray)}; module.exports=dataArray`)

      res.end(JSON.stringify(dataArray))
    }
  })
  .listen(2000, () => {
    console.log("server Started");
  });
