var mongoose = require("mongoose");

var blogSchema = new mongoose.Schema({
    title : String,
    image : String,
    content : String, // content is a better way to phrase it instead of body 
    date: { type: Date, default: Date.now },
});

var Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;

    