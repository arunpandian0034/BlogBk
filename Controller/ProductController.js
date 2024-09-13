const Product = require ("../Modules/ProductModules")

const multer = require ("multer")

const path = require ("path");

const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,"\Assets")
    },
    filename : function (req,file,cb)
    {
        cb(null,Date.now()+path.extname(file.originalname))
    }
});
const uploader = multer({storage:storage});

exports.insert= [
    uploader.array ("images",10),
    (req,res)=>{
        console.log(req.files)
        let images = []
        req.files.map ((e)=>{
            images.push(e.filename)
        })
        console.log(images)
    
    const product = new Product ({
        
       title: req.body.title,
        imag: images,
        author:req.body.author,
        amt :req.body.amt,
        
    })
        product.save()
        .then ((ele)=>{
            res.send(ele)
        })
        .catch((err)=>{
            res.send(err)
        })
}]
const Post = require ("../Modules/PostModules")
exports.insertwithpost = [
    uploader.array ("images",10),
    (req,res)=>{
        console.log(req.files)
        let images = []
        req.files.map ((e)=>{
            images.push(e.filename)
        })
        console.log(images)

        const post = new Post ({
            head : req.body.head,
            images :images,
            name :req.body.name,
        })
        post.save()
        .then (()=>{
            const product = new Product ({
                  title: req.body.title,
                 author:req.body.author,
                 amt :req.body.amt,
                 html:req.body.html
        })   
        return product.save()
    })
         .then ((ele)=>{
             res.send(ele)
         })
         .catch((err)=>{
             res.send(err)
         })
     
         
 }]
 


// exports.list = [(req,res)=>{
//     Product.find()
//     .then((Product)=>{
//         res.send(Product)
//     })
//     .catch ((err)=>{
//         res.send(err)
//     })
// }]

exports.list = [(req,res)=>{
    Product.find ()
        .then ((product)=>{
            res.send (product)
        })
        .catch ((err)=>{
            res.send(err)
        }) 
        
}]