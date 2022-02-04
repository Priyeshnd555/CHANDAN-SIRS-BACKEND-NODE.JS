
const blogModel = require("../models/blog")



const saveBlog = async(req,res,next)=>{

    const data = req.body;

    console.log(data);

    try{
        await blogModel.insertMany([{...data}])

        res.status(400).json({
            message:"success"
        })
    }catch(err){
        next(err)
    }
}

module.exports = {
    saveBlog
}