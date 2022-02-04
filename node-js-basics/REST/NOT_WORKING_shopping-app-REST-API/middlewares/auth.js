

const jwt = require("jsonwebtoken")


const authorizedUserAdmin = (req, res, next) =>{

    console.log("hello")
    console.log(req.SECRET_KEY.headers['authorization']);
    console.log(req);
    if(req.headers['authorization']){
        const token = req.headers['authorization'].split(" ")[1]
        const payload = jwt.verify(token, process.env.SECRET_KEY)
        if(payload.role ==="user" || payload.role ==="admin"){
            next()
        }else{
            res.status(401).json({
                error:true,
                message:'not Authorized',
                data:null
            })
        }
    }
    else{
        res.status(401).json({
            error:true,
            message:"not authorized",
            data:null
        })
    }
}

const authorizeAdmin = (req, res, next) =>{

    console.log(req,headers['authorization']);
    console.log(req.headers);
    if(req.headers['authorization']){
        const token = req.headers['authorization'].split(' ')[1]
        const payload = jwt.verify(token,process.env.SECRET_KEY)
        if(payload.role ==="admin"){
            next()
        }else{
            res.status(401).json({
                error:true,
                message:'not Authorized',
                data:null
            })
        }
    }
    else{
        res.status(401).json({
            error:true,
            message:"not authorized",
            data:null
        })
    }
}

module.exports ={
    authorizedUserAdmin,
    authorizeAdmin
}