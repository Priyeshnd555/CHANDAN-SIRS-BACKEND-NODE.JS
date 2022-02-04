const product = require("../models/product");

const getAllProducts = async (req, res, next) => {
  try {
    const products = await product.find().lean();
    console.log("proudcts" + products);
    res.json({
      error: false,
      message: "",
      data: products,
    });
  } catch (err) {
    next(err);
  }
};

const addProducts = async (req, res, next) => {
  const { pName, pDesc, pPrice } = req.body;

  console.log(req.body);

  try {
    await product.insertMany([
      {
        pName,
        pDesc,
        pPrice,
      },
    ]);

    res.json({
      error: false,
      message: "product added Successfully",
      data: null,
    });
  } catch (err) {
    next(err);
  }
};

const editProducts = async (req, res, next) => {
  const { _id,pName,pDesc,pPrice } = req.body;
  console.log(req.body)

  try {
    await product.updateOne({ _id: _id }, { $set: { pName, pDesc, pPrice } });

    res.json({ error: "false", message: "", data: {
        _id,
        pName,pDesc,pPrice
    } });
  } catch (err) {
    next(err);
  }
};

const deleteProduct = async(req,res,next)=>{
    const {_id} = req.body
    console.log("_id"+_id);
    try{
        await product.deleteOne({
        _id:_id
        })

        res.json({
            error:'false',
            message:"deleted successfully",
            data:null
        })
    
    }catch(err){
        next(err)
    }
}

module.exports = {
  getAllProducts,
  addProducts,
  editProducts,
  deleteProduct,

};
