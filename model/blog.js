const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  blogTitle: {
    type: String,
    required: true,
  },
  blogContent:{
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  blogThumbnail: {
    type: String,
  },
});

module.exports = mongoose.model('Blog', BlogSchema);
