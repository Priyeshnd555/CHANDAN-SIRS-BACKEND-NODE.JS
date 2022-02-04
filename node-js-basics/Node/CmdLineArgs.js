

const args = process.argv;
console.log(args);

// in the output you get an array 
// First element is path of cmd
// second element is the command
// third is third is the args
// forth...and so on 

if(args[2]==="add"){
    console.log("Adding");
}
else if(args[2] ==="delete"){
    console.log("delete");
}

// in above code we are taking data from commnad line
// we get it in the form of array 
// and based on the condition we are doing some process 
