const express = require ("express")
const router = express.Router()

const BlogController = require ("../Controller/BlogController")

// router.post ("/blog/insert",BlogController.insert)
router.post ("/blog/insertwithpost",BlogController.insertwithpost)
router.get ("/blog/list",BlogController.list)


module.exports=router