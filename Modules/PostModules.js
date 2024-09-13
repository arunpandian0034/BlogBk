const mongoose = require ("mongoose")
const PostSchema = new mongoose.Schema({
    head:{type:String},
    images:[{type:String}],
    name:[{type:String}]
},{timestamps:true})

const PostModules=mongoose.model("Post",PostSchema)
module.exports = PostModules