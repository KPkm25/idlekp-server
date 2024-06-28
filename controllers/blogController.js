const Blog = require("../model/blog");

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

exports.createBlog = async (req, res) => {
    const { blogTitle, blogContent } = req.body;
    // const blogThumbnail = req.file.path; // Path to the uploaded image
    const blog = new Blog({
      blogTitle,
      blogContent,
    });
  
    try {
      const newBlog = await blog.save();
      res.status(201).json(newBlog);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
