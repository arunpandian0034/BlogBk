const mongoose = require ("mongoose")

const ProductSchema = new mongoose.Schema ({
    title :{type:String, require:true},
    images :[{type:String,require : true}] ,
    author : { type:String},
    amt : {type:String},
    html :{type:String},
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"
    }

},{timestamps:true})

const ProductModules = new mongoose.model("Product",ProductSchema)

module.exports = ProductModules