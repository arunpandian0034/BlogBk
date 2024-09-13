const express = require ("express")
const router = express.Router()

const ProductController = require ("../Controller/ProductController")

router.post ("/product/insert",ProductController.insert)
router.post ("/product/insertwithpost",ProductController.insertwithpost)
router.get ("/product/list",ProductController.list)


module.exports=router
