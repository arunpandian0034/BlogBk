const mongoose = require('mongoose');

// Define the schema
const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Fixed 'require' to 'required'
  images: [{ type: String, required: true }], // Fixed 'require' to 'required'
  author: { type: String },
  maindescription: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
}, { timestamps: true }); // Automatically add `createdAt` and `updatedAt` fields

// Create the model
const Blog = mongoose.model('Blog', BlogSchema);

// Export the model
module.exports = Blog
