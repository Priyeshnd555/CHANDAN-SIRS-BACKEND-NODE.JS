
console.log("program started");

// creating a file using Sync 

const fl = require("fs"); // importing file system

// Renaming the file and folder 
// fl.renameSync("example/newtest.text","example",()=>console.log("successfully renamed the file"))


if(!fl.existsSync('example/last.txt')){

    fl.mkdirSync("example")
fl.writeFileSync('example/last.txt'," not created filehello this is an assignment for creating the file");


}
else{
    fl.writeFileSync('example/last.txt'," folder created filehello this is an assignment for creating the file");

}


// writing to the file

// readFileSync returns something 
// in buffer format so we need to store it into 
// something and then we have to 
// convert into string format 




// append to a file it is to say adding data to a file 
// writing file replaces the whole content in a file also it creates a file if does not exits

fl.appendFileSync("example/last.txt","\n appended to the file",{},()=>{console.log("Logs ,,appended to the File")})





const dataBuffer = fl.readFileSync('example/last.txt')
// data in the form of string 
console.log("data", dataBuffer.toString())


fl.rename("example","example/byebye.txt",()=>console.log("reanmed succesfully"))



// delete a file
// fl.rmdirSync("example",{recursive:true},()=>{console.log("file deleted succesfully")})


console.log("program ended");