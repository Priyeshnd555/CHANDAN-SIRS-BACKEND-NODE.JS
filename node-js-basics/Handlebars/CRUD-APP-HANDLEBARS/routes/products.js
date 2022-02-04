const express = require("express");
const router = express.Router()




let products = [
    { _id: 1, pName: "name", pDesc: "de", pPrice: 23 },
    { _id: 1, pName: "two", pDesc: "second", pPrice: 1000 },
  ];


router.get("/products", (req, res) => {
  //products is table so we have to send data as object in second param
  res.render("./products.handlebars", { products });
});

//To update the product
router.get("/add-products", (req, res) => {
  res.render("./add-products.handlebars");
});

// POST METHOD

router.post("/add-products", (req, res) => {
  console.log("request body", req.body); // to display the input values from form

  let { _id, pName, pDesc, pPrice } = req.body; // here we are destructing the values from req.body

  _id = parseInt(_id); // since in JSON numbs are in strings we convert back to numbers using parseInt()
  pPrice = parseInt(pPrice); // since in JSON numbs are in strings we convert back to numbers using parseInt()

  products.push({
    _id,
    pName,
    pDesc,
    pPrice,
  });

  // res.send("Product added successfully")
  res.redirect("/products/products");
});

// TO UPDATE WE USE PUT METHOD
router.get("/edit-product/:_id", (req, res) => {
  console.log(req.params._id);

  const index = products.findIndex((product) => {
    return parseInt(product._id) === parseInt(req.params._id);
  });
  const selectedProduct = products[index];
  res.render("./edit-product.handlebars", { selectedProduct });

  // res.send("product edited successfully")
});

router.post("/edit-products", (req, res) => {
  console.log(req.body);

  let { _id, pName, pDesc, pPrice } = req.body;

  _id = parseInt(_id);
  pPrice = parseInt(pPrice);
  const index = products.findIndex((product) => {
    return parseInt(product._id) === parseInt(_id);
  });

  products.splice(index, 1, { _id, pName, pDesc, pPrice });

  res.redirect("/products/products");
});

// to delete
router.get("/delete-product/:_id", (req, res) => {
  const _id = req.params._id;
  const index = products.findIndex((product) => {
    return parseInt(product._id) === parseInt(_id);
  });

  products.splice(index, 1);

  res.redirect("/products/products");
});



module.exports=router