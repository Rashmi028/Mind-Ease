import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const PostSchema = new Schema({
  author: {
    type: String,
    required: [true, 'Author is required'],
    trim: true,
    maxlength: [50, 'Author name cannot be more than 50 characters']
  },
  content: {
    type: String,
    required: [true, 'Post content is required'],
    trim: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  views: {
    type: Number,
    default: 0
  },
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Create a text index for search functionality
PostSchema.index({ author: 'text', content: 'text' });

const Post = mongoose.model('Post', PostSchema);
export default Post;
