//  UN COMMENT BELOW CODE BEFORE EXECUTING 




        /* FOR NON FLOWING GO TO nonFlowingStreamsData.js */

const fs= require('fs');

const readStream = fs.createReadStream('./view/view.txt',
{highWaterMark:128*1024});
// when we write above line a connetion is opened and 
// data will be flowing from view/view.js to this file 
// 3 things will happen 1. open connection 2. data Flow  3. Automatically close Connection 

let readData =""

console.log(readStream);


// for all these three process also we can write a callback function  
// open connection
readStream.on("open",()=>{
    console.log("Stream onpened");
})

// data flow 
readStream.on("data",(chunck)=>{
    console.log("Buffer");
    console.log(chunck);
    readData=+chunck.toString
    // console.log("convertToStringFromBuffer",chunck.toString());
    console.log("\n");
})


// close or end automatically
readStream.on("end",()=>{
    console.log("Stream Closed");
})


// handling Error 
readStream.on("error",(err)=>{
    console.log("Error ",err); // create some error in path view/view
});

console.log("program ended");