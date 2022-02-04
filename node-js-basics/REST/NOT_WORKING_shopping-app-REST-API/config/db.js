
const mongoose = require("mongoose");

const dbUrl = process.env.DB_URL

module.exports.mongoConnection = mongoose.connect(dbUrl, {
    useNewUrlParser:true,
    useUnifiedTopology:true,

},(err)=>{

    if(!err){
        console.log("Db connection is successful")
    }
    else{
        console.log("Db connection failed")
    }
})