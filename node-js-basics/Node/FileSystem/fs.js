// common operations
// create read, update rename,  etc

/// to do all of this we use fs module

const fs = require("fs");

// console.log(fs);

if (!fs.existsSync("demo")) {
  fs.mkdirSync("demo");
}

/*
        try{
            fs.mkdirSync("demo")
        }
        catch(err) {
            console.log(err)
        }
*/


if(!fs.existsSync("demo/test.txt")){
    // only if file exists then only write into  that file
fs.writeFileSync(
  "demo/test.txt",
  "Hello world am writing to file using node js command"
);
}

const data = fs.readFileSync("demo/test.txt");

console.log(data);

console.log(data.toString());

console.log("program Ended");
