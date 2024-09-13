const Blog = require("../Modules/BlogModules");
const multer = require("multer");
const path = require("path");

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "/Assets"); // Use forward slash for paths
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const uploader = multer({ storage: storage });

exports.insert = [
    uploader.array("images", 10),
    (req, res) => {
        console.log(req.files);
        let images = req.files.map((file) => file.filename);
        console.log(images);

        // Create a new blog entry
        const blog = new Blog({
            title: req.body.title, // Assuming title is sent in the request body
            author: req.body.author,
            maindescription :req.body.maindescription,
            description :req.body.description,
            content : req.body.content,
        });

        blog.save()
            .then((ele) => {
                res.send(ele);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    }
];

exports.insertwithpost = [
    uploader.array("images", 10),
    (req, res) => {
        console.log(req.files);
        let images = []
        req.files.map ((e)=>{
            images.push(e.filename)
        })


        console.log(images);

        // Create a new blog entry
        const blog = new Blog({
            title: req.body.title, // Assuming title is sent in the request body
            author: req.body.author,
            maindescription :req.body.maindescription,
            description :req.body.description,
            content : req.body.content,
        
        });

          return blog.save()
    
            .then((ele) => {
                res.send(ele);
            })
            .catch((err) => {
                res.send(err);
            });
    }
];

exports.list = [
    (req, res) => {
        Blog.find()
            .then((blog) => {
                res.send(blog);
            })
            .catch((err) => {
                res.send(err);
            });
    }
];

