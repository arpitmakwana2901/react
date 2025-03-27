import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    axios
      .get("http://localhost:3001/user")
      .then((res) => {
        const user = res.data.find(
          (user) => user.email === email && user.password === password
        );

        if (user) {
          alert("Login Successful");
          localStorage.setItem("userStorage", JSON.stringify(user));
          setEmail("");
          setPassword("");
          setError("");
          navigate("/welcome");
        } else {
          setError("Username or password incorrect.");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("An error occurred. Please try again.");
      });
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-gray-800 rounded-2xl shadow-2xl shadow-cyan-500/20 p-8 transform hover:-translate-y-2 transition-all duration-300">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-white tracking-tight">
            Sign In
          </h2>
          <p className="mt-2 text-cyan-400 text-sm">
            Welcome back! Log in to continue
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-red-900/50 text-red-300 rounded-lg flex items-center border border-red-700 animate-fade-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition duration-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition duration-200"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 text-gray-900 py-3 rounded-lg font-semibold hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-200 shadow-lg hover:shadow-cyan-500/50"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Don’t have an account?{" "}
            <Link to="/signup">
              <span className="text-cyan-400 hover:text-cyan-300 font-medium transition duration-200">
                Sign up
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;