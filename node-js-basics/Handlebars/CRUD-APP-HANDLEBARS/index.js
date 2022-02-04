const express = require("express");
const exphbs = require("express-handlebars");
const app = express(); // creating server

// import file system
const port = 2000;

//importing products route
const productsRoute = require('./routes/products')


// set up template enginec
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars")


//============================================================================================
/* by default we dont get data from form 
so we have to use middleware then only we will get it*/

app.use(express.urlencoded({ extended: true }));

//creating middleware telling express to go to routes/products
app.use('/products',productsRoute)


//on request following will be executed
app.get("/", (req, res) => {
  res.render("./landingpage.handlebars");
});



// listen on server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
