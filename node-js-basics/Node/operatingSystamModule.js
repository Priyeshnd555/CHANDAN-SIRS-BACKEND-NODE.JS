
// this is an example of os Module

const os = require('os');

//Architecture os os
console.log("Architecture", os.arch());

//Platform
console.log("platform",os.platform());


//free memory()
console.log("free memory", os.freemem()); // this will  be in bytes 
// to convert to gb 1kb = 1024
// to conver to mb 1mb = 1024 kb
// to convert to gb 1gb = 1024mb


const memInBytes = os.freemem();
const memInKb = memInBytes/1024;
const memInMb = memInKb/1024;
const memInGb = memInMb/1024;


console.log("memInBytes",memInBytes+" Bytes");
console.log("memInKb",Math.round(memInKb)+" Kb");
console.log("memInMb",Math.round(memInMb)+" Mb");
console.log("memInGb",memInGb+"  Gb");

//Total memory()
console.log('Total memory', os.totalmem());

// to get cpu info 
console.log("Cpu info", os.cpus());


