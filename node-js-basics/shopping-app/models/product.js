const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  pName: {
    type: "string",
    required: true,
    minlength:3,
    maxlength:100
  },
  pDesc: {
    type: "string",
    required: true,
    minlength:3,
    maxlength:100
  },
  pPrice: {
    type: "number",
    required: true,
    min:0,
    max:1000000000,
    validate:{
      validator:(val)=>{
        return !(val.toString().length>6)
      },
      message:(val)=>{
        return `${val.value} length should NOT  be greater than 6`
      }
    }
  },
  date:{
    type:"date",
    default:Date.now(),
  },
});
module.exports = mongoose.model("products", productSchema); 
// here products is collection name
