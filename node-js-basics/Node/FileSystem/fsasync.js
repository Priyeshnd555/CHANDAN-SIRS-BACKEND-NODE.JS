const fs = require("fs");

console.log("program started");


const writeData=()=>{
    fs.writeFile("view/view.txt","welcome to node.js file system ",(fileErr)=>{
        if(fileErr){
            console.log("File err",fileErr);
        }
        else{
            console.log("Data written Successuflly ");
        }
    })
};

if (
 
    (fs.exists("view",
  (exists) => { // this is second param for exists takes a call back func 
    if (!exists) {
      fs.mkdir("view", (err) => {
        if (err) {
          console.log("The folder is not created", err);
        } else {
          console.log("The folder created successfully");
          writeData()
        }
      })

    }
    else{
        writeData()
    }
  }))
);

/* 

if(); ==> correct
if(){}; ==> correct


if() ==> wrong approach u wont get code below executed


*/
  console.log("program ended");




  fs.readFile