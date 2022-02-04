
const fs = require("fs")


//this is will return only once ie,, it wont flow lets say u  want only a tiny 
// bit of data from the file 

const readStream = fs.createReadStream("./demo/test.txt");



setTimeout(() => {
    const data = readStream.read(1);
    console.log("Data",data);
}, 1000);






// non flowing - stream// it means it will read only once unlike streams or chuncks
// so we are specifying the data that is to be read from file
// setTimeout(()=>{
//     const data = readStream.read(1000)
//     console.log("10 bytes of data",data);
// },2000)
