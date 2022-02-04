const express = require("express");
const exphbs = require("express-handlebars");
const app = express(); // creating server

const mongoose = require('mongoose')

// this copied while creating cluster from mongodb atlas
//  To connect to cloud Atlas
//( const dbUrl = 'mongodb+srv://Priyeshnd:555dnhseyirp@cluster0.g00fh.mongodb.net/shopping-app?retryWrites=true&w=majority')

const dbUrl = "mongodb://127.0.0.1:27017/shopping-app"

// import file system
const port = 2000;

//importing products route
const productsRoute = require('./routes/products')



mongoose.connect(dbUrl,
                      {
                         useNewUrlParser: true,
                          useUnifiedTopology:true,
                      },(err)=>{
                          if(!err)
                              {console.log("DB connection was successful");}
                          else
                              {
                                console.log("DB connection was failed",err);
                              }
                        }
                )





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
