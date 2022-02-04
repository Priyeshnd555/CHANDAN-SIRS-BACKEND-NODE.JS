const express = require('express')
const router = express.Router();


router.get('/getData',(req,res)=>{
    res.send('this is Data page')
});

router.get('/aboutpage',(req,res)=>{
    res.send('About page')
});


module.exports= router

