const mongoose = require("mongoose")

const departmentSchema = new mongoose.Schema({

    dname:String,
    dlocation:String,
    empid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'employee'
    }
});

module.exports = mongoose.model("department",departmentSchema)