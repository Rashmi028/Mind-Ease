import { useEffect, useState } from "react";
import axios from "axios"; //  Added axios for API calls

//  Post component unchanged, just updated timestamp formatting
const Post = ({ post }) => (
  <div className="bg-white/60 backdrop-blur-lg rounded-xl shadow-xl p-8 hover:shadow-2xl hover:bg-white/70 transition-all duration-500 transform hover:-translate-y-1 group">
    <div className="flex items-center space-x-5 mb-6">
      <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
        <span className="text-white font-light text-2xl">{post.author[0]}</span>
      </div>
      <div>
        <h3 className="text-gray-800 text-xl tracking-wide group-hover:text-orange-600 transition-colors duration-300">
          {post.author}
        </h3>
        {/*  Changed from static timestamp to backend date */}
        <p className="text-sm text-gray-500 font-light tracking-wide">
          {new Date(post.createdAt).toLocaleString()}
        </p>
      </div>
    </div>
    <p className="text-gray-600 text-base leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
      {post.content}
    </p>
    <div className="flex items-center space-x-8">
      {/* Like / Comment / Share Buttons - unchanged */}
    </div>
  </div>
);

//  CreatePost now accepts props and sends POST request to backend
const CreatePost = ({ onPostCreated }) => {
  const [content, setContent] = useState("");

  //  Create post handler connected to backend
  const handleSubmit = async () => {
    if (!content.trim()) return;
    try {
      const res = await axios.post("http://localhost:5000/post/create", {
        author: "Guest", // 🔄 Replace with real user when available
        content,
      });
      onPostCreated(res.data); //  Tell parent to update post list
      setContent(""); //  Clear textarea after post
    } catch (err) {
      console.error("Failed to create post:", err);
    }
  };

  return (
    <div className="bg-white/60 backdrop-blur-lg rounded-xl shadow-xl p-8 mb-8 transform hover:shadow-2xl hover:bg-white/70 transition-all duration-500">
      <textarea
        placeholder="Share your thoughts..."
        value={content}
        onChange={(e) => setContent(e.target.value)} //  Controlled input
        className="w-full px-6 py-4 rounded-xl bg-white/50 border-none shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all duration-300 hover:bg-white/60 text-gray-700 font-light text-lg placeholder:text-gray-400/80"
        rows="3"
      />
      <div className="flex justify-between items-center mt-6">
        <div className="flex space-x-6">
          {/*  Preserved original photo and video buttons */}
          <button className="flex items-center space-x-3 text-gray-500 hover:text-orange-500 transition-all duration-300 hover:scale-110 group">
            <div className="p-2 rounded-xl bg-orange-50 group-hover:bg-orange-100 transition-colors duration-300">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span className="text-sm font-light">Photo</span>
          </button>
          <button className="flex items-center space-x-3 text-gray-500 hover:text-orange-500 transition-all duration-300 hover:scale-110 group">
            <div className="p-2 rounded-xl bg-orange-50 group-hover:bg-orange-100 transition-colors duration-300">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span className="text-sm font-light">Video</span>
          </button>
        </div>
        <button
          onClick={handleSubmit} //  Trigger create post
          className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 hover:from-orange-600 hover:to-orange-700"
        >
          Post
        </button>
      </div>
    </div>
  );
};

//  Main Community component fetches and displays posts
export default function Community() {
  const [posts, setPosts] = useState([]);

  //  Fetch posts when page loads
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Failed to fetch posts:", err));
  }, []);

  //  Add new post to top of feed
  const handleNewPost = (newPost) => {
    setPosts((prev) => [newPost, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="mx-auto space-y-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
            Community
          </h1>
        </div>

        {/*  Pass callback for new post */}
        <CreatePost onPostCreated={handleNewPost} />

        <div className="space-y-6">
          {/*  Render posts from backend */}
          {posts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
