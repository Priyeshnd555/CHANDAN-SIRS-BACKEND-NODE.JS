const express = require("express");
const router = express.Router();

const product = require("../models/product");

router.get("/error", (req, res) => {
  res.status(500).send("something wrong while passing data  to DB ");
});

router.get("/products", async (req, res) => {
  //products is table so we have to send data as object in second param

  try {
    const products = await product.find().lean();
    res.render("./products.handlebars", { products });
  } catch (err) {
    console.log("err", err);
    res.redirect("/products/error");
  }
});

//To update the product
router.get("/add-products", (req, res) => {
  res.render("./add-products.handlebars");
});

// POST METHOD
router.post("/add-products", async (req, res) => {
  console.log("request body", req.body); // to display the input values from form

  let { pName, pDesc, pPrice } = req.body; // here we are destructing the values from req.body

  pPrice = parseInt(pPrice); // since in JSON numbs are in strings we convert back to numbers using parseInt()

  try {
    await product.insertMany([
      // if we dont use async await we can use then and catch
      // insertMany is a promise happining in dbserver  so it is ASYNCHRONOUS
      {
        pName,
        pDesc,
        pPrice,
      },
    ]);
    res.redirect("/products/products");
  } catch (err) {
    console.log(err);
    // if there is error go to error route
    res.redirect("/products/error");
  }
});

// TO UPDATE WE USE PUT METHOD
router.get("/edit-product/:_id", async(req, res) => {
  console.log(req.params._id);


try{
  const productToEdit = await product.findOne({
    _id:req.params._id
  }).lean()
  res.render("./edit-product.handlebars", { selectedProduct :productToEdit});
}catch(err){

  res.redirect('/error')
}


  // res.send("product edited successfully")
});

router.post("/edit-products", async(req, res) => {
  console.log(req.body);

  let { _id, pName, pDesc, pPrice } = req.body;

  try{

    await product.updateOne({
      _id,
    },{
      $set:{
        pName,
        pDesc,
        pPrice
      }
    },{runValidators:true}) // if we dont pass the third validator then it wont vaidate the  field data
    // remember we have set pName to of atleast 3 char  so always add runValidators

  res.redirect("/products/products");
  }catch(err){
    res.redirect('/products/error')
  }


});

// to delete
router.get("/delete-product/:_id", async (req, res) => {
  const _id = req.params._id;

  try {


    await product.deleteOne({
      _id: _id,
    });
/* 

delete many to delete multiple documents
await product.deleteMany({
  _id:["18ce8c55c014d1b3ed199c2","18ce8c55c014d1b3ed199c2"]
})

*/

res.redirect("/products/products");

  } catch (err) {
res.redirect("/error");

  }
});


// SEARCHING  DATA
router.get('/search',(req,res)=>{
res.render('./search.handlebars')

});

router.post('/search',async(req,res)=>{

    const searchData =req.body.searchData
    console.log(searchData)

  try{  

    const products = await product.find().lean();

    const matchingObj =  products.filter((val,index)=>{

      const len = searchData.split('').length

      const newVal = val.pName.split('').slice(0,len).join('')
      console.log(newVal)
      return val.pName===searchData || newVal===searchData
    })


    console.log("matching Data",matchingObj);

    matchingObj.length===0?  res.send("No matching Data"):
    res.render("./matching-products.handlebars", { matchingObj });
  }
  catch(err){
    console.log(err);
  }
}
)

router.get('/create-order/:_id',async(req,res)=>{
  try{
    const productToEdit = await product.findOne({
      _id:req.params._id
    }).lean()
    res.render("./create-orders.handlebars", { selectedProduct :productToEdit});
  }catch(err){
  
    res.redirect('/error')
  }
})


router.post('/order',(req,res)=>{

let {_id,pName,pDesc,pPrice,pQuantity} = req.body

// do parse int
req.body.pPrice= parseInt(pPrice)*parseInt(pQuantity)

const orders = []//creating copy


orders.push(req.body)

console.log(orders)
res.render('./order.handlebars',{orders})


})



module.exports = router;
