//APP SETUP ENGINE
var bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    express = require("express"),
    app = express();
    config = require('./config');
    Blog = require("./models/blog");
      
    
// APP INNER CONFIG
mongoose.connect(config.databaseName, {useNewUrlParser: true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//Error Zone
///////////////////////////////////////////////////////////////////////////////////////
//MONGOOSE SET UP 
// var blogSchema = new mongoose.Schema({
//     title: String,
//     image: String,
//     body: String,
//     created: {type: Date, default: Date.now}
// })
// var Blog = mongoose.model("Blog", blogSchema);

//CREATE DATA FOR DB
// Blog.create({
//     title: "Test Blog 2",
//     image: " ",
//     body: "Welcome blog app which i want to use for learning "
// });

///////////////////////////////////////////////////////////////////////////////////////
//ROUTES
app.get("/", function(req, res){
    res.redirect("/blogs");
});

app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log("ERROR");
        } else{
            res.render("index", {blogs: blogs});
        }
    });
});

app.get("/blogs/new", function(req, res){
    res.render("new");
});

app.post("/blogs", function(req, res){
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            res.render("new");
        } else{
            res.redirect("/blogs");
        }
    });
});

//SHOW ROUTE
app.get("/blogs/:id", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            console.log("ERROR!");
        } else{
           res.render("show", {blog: foundBlog}); 
           // error no 2 the console.log(blog); didn't work because it wasn't defined so just console.log a text would do the trick, or else you need the details explicitly.
           console.log('blog by id showned @ port 8081');
        }
    });
});




// HOST 
app.listen(config.port, () =>
  console.log(`Listening at port ${config.port} on the ${config.envName}`),
);




