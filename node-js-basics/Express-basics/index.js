const express = require("express"); // this will return a function

const app = express(); // calling the function returned by express library

const port = 2000; // storing the port no in a variable for reuse

//====================================================================================
// MIDDLE WARE FUNCTION

const getDate = (req, res, next) => {
    //THIS IS AN APPLICATION LEVEL MIDDELWARE
  console.log("Middle ware function");
  // next should be called if the request need to be passed to
  // next routes

  const date = Date.now();
  //---------------------------------------------------------------------------------
  // to pass data from middle ware to http req methods we have add them to request object
  req.requestedData = date;// now this can be accessed anyware 
  //---------------------------------------------------------------------------------

//NOTE : REQUEST AND RESOPONSE ARE OBEJCTS
  next(); // we cannot pass any param here as http methods takes only two param req, res objets
};
app.use(getDate); // this will make the above function as a middleware
//========================================================================================

//FOR STATIC web RESOURCE cd

app.use(express.static("./public"));

/* dummy path */app.use("/static",express.static("./files")); // for accesing files folder
// here 1 param "/static is a dummy path added "
// now to access files/data.txt 
// we will have to write => localhost:2000/static/data.txt

// NOTE WE DONT HAVE TO WRITE /files/data.txt  above it wont give results
// only then it will be visible


// add localhost:2000/home.html or 
// localhost:2000/contact.html 
// since both are present inside public folder

//======================================================================================


app.get('/getData',(req,res)=>{

    res.send(`
    <p> get datacurrent Date: </P>
    <h1> ${new Date(req.requestedData)}</h1>
    <button onclick="alert('hello world')">Click</button>`)
})





// creatin a route or passing req to dynamic web resource
// this is called as One route

app.get("/", (req, res) => {
  // when the path matches this will get executed
  res.send(`Hello world , \n this is data from middle ware func ${new Date(req.requestedData)}`);
});

app.get("/add", (req, res) => {
  console.log("Add GET Method");
  res.send("Add GET Method");
});

app.post("/add", (req, res) => {
  /// IF U ENTER ANYTHING THIS WONT GET EXECUTED AS
  // URL TAKES ONLY GET METHOD TO EXECUTE POST
  //CREATE A REQUEST FROM <FORM METHOD ="POST" ACTION="./ADD"/>
  // OTHERWISE IT WILL ALWAYS EXECUTE GET METHOD THE ABOVE ONE
  console.log("ADD POST METHOD");
  res.send("ADD POST METHOD");
});

app.listen(port, () => {
  console.log(` listening on port ${port}`);
});

//============================================================================================================
//NOTE : WE HAVE TO WRITE ERROR HANDLING AT LAST 
// OTHER PATH AFTER ERROR HANDLING WILL NOT BE CHECKED SO  WE GET ERROR THOUGH THE PATH IS PRESENT
// ERROR HANDLING


app.all("*", (req,res)=>{

    // also keep error handling at the bottom other wise it wont handle 
    // errors which are down to it
    // Error handling should be at the last 

    // This is to catch error in whole application
    // whenever there is some error error will be thrown
    throw new Error(`<h1 style="color:red;text-align:center">${req.protocol+"://"+req.get('host')+req.originalUrl}The path doesent Exist</h1>`)
})

// Error handling middleware
// Enter some wrong path in url and see
app.use((err, req, res, next)=>{
    
    res.status(500);
    res.send(err.message)

    // if we dont want to handle err then 
    // simply comment out above two lines of code  
    // call next func and pass err object inside it
    // next(err)

    // dont call next method 
    //otherwise express will handle error and dispaly default messgae from its library
    // so we dont call it 
})

//=========================================================================================

