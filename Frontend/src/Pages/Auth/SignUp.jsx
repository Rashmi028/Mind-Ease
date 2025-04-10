import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Blob = ({ className }) => (
  <div
    className={`absolute rounded-full mix-blend-multiply filter blur-xl animate-blob ${className}`}
  />
);

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  
    try {
      const res = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        alert("Signup successful");
        navigate("/signin");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
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
      <div className="w-full max-w-md backdrop-blur-sm bg-white/70 rounded-xl shadow-xl p-8 space-y-6 animate-fade-in">
        <div className="text-center">
          <h2 className="text-3xl font-light text-orange-600 tracking-wide">
            Create Account
          </h2>
          <p className="mt-2 text-gray-600 font-light tracking-wide">
            Start your wellness journey today
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className="block text-sm font-light text-gray-700"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 hover:bg-white/70 font-light"
            />
          </div>

          <div>
            <label
              className="block text-sm font-light text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 hover:bg-white/70 font-light"
            />
          </div>

          <div>
            <label
              className="block text-sm font-light text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 hover:bg-white/70 font-light"
            />
          </div>

          <div>
            <label
              className="block text-sm font-light text-gray-700"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 hover:bg-white/70 font-light"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 border border-transparent rounded-lg shadow-md text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 font-light tracking-wide">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="font-normal text-orange-600 hover:text-orange-500 transition-colors duration-300"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
