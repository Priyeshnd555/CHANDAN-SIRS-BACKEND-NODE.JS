const fs = require("fs")
const args = process.argv
console.log(args);
if(args[2]=='add'){
    fs.writeFileSync('read.txt',"welcome to nodejs")
    console.log('Adding');
}else if(args[2]=='delete'){
    console.log('delete ');
}