import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Blob = ({ className }) => (
  <div
    className={`absolute rounded-full mix-blend-multiply filter blur-xl animate-blob ${className}`}
  />
);

const GridPattern = () => (
  <div className="absolute inset-0 z-0 opacity-5">
    <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMiAyaDJ2MkgyeiIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9nPjwvc3ZnPg==')]"></div>
  </div>
);

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Login successful!");
        localStorage.setItem("user", JSON.stringify(data.user));
        console.log("User data from backend:", data.user);
        navigate("/dashboard");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const blobs = document.querySelectorAll(".animate-blob");
    blobs.forEach((blob) => {
      blob.style.animation = `blob 7s infinite ${Math.random() * 2}s`;
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 p-4 relative overflow-hidden">
      <GridPattern />
      <style>
        {`
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }
        `}
      </style>
      <Blob className="bg-orange-300 opacity-70 h-64 w-64 -top-32 -left-16" />
      <Blob className="bg-orange-400 opacity-70 h-64 w-64 top-32 -right-16" />
      <Blob className="bg-orange-200 opacity-70 h-64 w-64 bottom-32 left-8" />
      <div className="w-full max-w-md backdrop-blur-sm bg-white/70 rounded-xl shadow-xl p-8 space-y-6 animate-fade-in relative z-10 border border-white/20 hover:shadow-2xl hover:bg-white/80 transition-all duration-300">
        <div className="text-center space-y-3">
          <div className="inline-block p-3 rounded-full bg-orange-100/50 mb-2">
            <svg
              className="w-8 h-8 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-light text-orange-600 tracking-wide">
            Welcome Back
          </h2>
          <p className="text-gray-600 font-light tracking-wide">
            Sign in to continue your journey
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 mt-8">
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=" "
              required
              className="peer w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 hover:bg-white/70 placeholder-transparent"
            />
            <label
              htmlFor="email"
              className="absolute left-4 -top-2.5 bg-white/70 px-1 text-sm font-light text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-orange-600"
            >
              Email Address
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder=" "
              required
              className="peer w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 hover:bg-white/70 placeholder-transparent"
            />
            <label
              htmlFor="password"
              className="absolute left-4 -top-2.5 bg-white/70 px-1 text-sm font-light text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-orange-600"
            >
              Password
            </label>
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2 cursor-pointer group">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
              />
              <span className="text-gray-600 group-hover:text-gray-800 font-light">
                Remember me
              </span>
            </label>
            <Link
              to="/forgot-password"
              className="text-orange-600 hover:text-orange-700 font-medium"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 border border-transparent rounded-lg shadow-md text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 font-light tracking-wide">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-normal text-orange-600 hover:text-orange-500 transition-colors duration-300"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
