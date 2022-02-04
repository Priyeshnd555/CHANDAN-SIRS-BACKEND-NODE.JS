// the below thing works
//open post man and paste following code in it

//GET : http://localhost:2000/products
//PUT : http://localhost:2000/products?id=1&name=asus&description=this is awesomer&price=30000
//POST : http://localhost:2000/products?id=2&name=apples&description=this is costly&price=585000
//DELETE : http://localhost:2000/products?id=1

const http = require("http");
const url = require("url");

// creating an array of objects on which crud operation is performed

const products = [
  {
    id: 1,
    name: "mobile",
    desription: "android phone",
    price: 8000,
  },
];

http
  .createServer((req, res) => {
    const reqUrl = url.parse(req.url, true); // this will convert the url  into  object
    const path = reqUrl.pathname;

    console.log("reqUrl.path", reqUrl.path); // this will get the path  always use pathname
    console.log("reqUrl.pathname", reqUrl.pathname); // this will get the path  always use pathname
    // if u use ( " reqUrl.path instead of reqUrl.pathname it wont work")

    /*
    ==============================================================================================
    req.path is LEGACY DO NOT USE IT 
     for http methds reqUr.path = path + query , example: delete method : reqUrl = /products?id=1
    ==============================================================================================
     */

    //===================================================================================================
    // for http methds reqUr.pathname = path , example: delete method : reqUrl = /products
    //==================================================================================================

    if (path === "/products" && req.method === "GET") {
      res.end(JSON.stringify(products));
    } else if (path === "/products" && req.method === "POST") {
      // JUST PUSH OBJECT FROM URL TO PRODUTS
      console.log("post ", reqUrl.query);

      products.push(reqUrl.query);

      res.end(JSON.stringify(products));
    } else if (path === "/products" && req.method === "PUT") {
      // first get the index of object from the id given in the url

      const id = reqUrl.query.id;

      const index = products.findIndex((products) => {
        return parseInt(products.id) === parseInt(id);
      });

      // print the in the console
      console.log("index of id in put", index);
      products.splice(index, 1, reqUrl.query);

      res.end(JSON.stringify(products));
    } else if (path === "/products" && req.method === "DELETE") {
      const id = reqUrl.query.id;

      const index = products.findIndex((products) => {
        return parseInt(products.id) === parseInt(id);
      });
      console.log("delete id", index);

      // delete object

      products.splice(index, 1);

      res.end(JSON.stringify(products));
    }
  })
  .listen(2000, () => {
    console.log("server started");
  });
