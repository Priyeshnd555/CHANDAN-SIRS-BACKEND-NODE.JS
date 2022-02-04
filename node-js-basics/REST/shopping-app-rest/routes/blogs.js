
const express = require("express")

const {saveBlog} = require("../controllers/blogs.js")


const router = express.Router()


router.post('/saveblog',saveBlog)

module.exports = router