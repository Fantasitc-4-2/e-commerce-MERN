import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (
      !userData.name ||
      !userData.email ||
      !userData.userName ||
      !userData.password
    ) {
      setError("All fields are required!");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) return setError("Invalid email");

    const strongPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    if (!strongPassword.test(userData.password)) {
      return setError(
        "Password must include uppercase, number, and special char"
      );
    }
    if (userData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1500);
  };
  return (
    <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
      <div className="flex">
        <div className="w-1/2 flex items-center justify-center">
    <img 
      src="form-img.jpg"
      alt="Sign-up illustration"
      className="max-w-full h-auto"
    />
  </div>
  <div className="w-1/2 flex items-center justify-center px-10">
     
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
         <div className="mx-auto mx-w-2xl text-center">
        <h2 class="text-4xl font-semibold tracking-tight  sm:text-5xl">
          Create an account
        </h2>
        <p class="mt-2 text-lg/8 text-gray-400">Enter your details below</p>
      </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label for="Name" className="text-sm/6 font-semibold">
              Name
            </label>
            <div className="mt-2">
              <input
                id="Name"
                type="text"
                placeholder="Joe Negm"
                name="Name"
                autoComplete="given-name"
                className="block w-full bg-white/5 p-3 text-base border-b-1 placeholder:text-gray-500 focus:outline-none"
                value={userData.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label for="username" className="text-sm/6 font-semibold">
              username
            </label>
            <div className="mt-2">
              <input
                id="username"
                type="text"
                name="username"
                placeholder="joenegm"
                autoComplete="given-name"
                className="block w-full  bg-white/5 p-3  border-b-1 text-base placeholder:text-gray-500 focus:outline-none" 
                value={userData.userName}
                onChange={(e) =>
                  setUserData({ ...userData, userName: e.target.value })
                }
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label for="email" className="text-sm/6 font-semibold">
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="joenegm@example.com"
                autoComplete="given-name"
                className="block w-full peer  bg-white/5 p-3 border-b-1 text-base placeholder:text-gray-500 focus:outline-none "
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
              <p className="invisible peer-invalid:visible text-red-500 text-sm">Please provide a valid email address.</p>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label for="password" className="text-sm/6 font-semibold">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="given-name"
                className="block w-full  bg-white/5 p-3 border-b-1 text-base placeholder:text-gray-500 focus:outline-none"
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
            </div>
          </div>
          {error && (
            <div className="sm:col-span-2 text-red-500 text-sm">{error}</div>
          )}
          <div class="mt-10 sm:col-span-2">
            <button
              type="submit"
              class="block w-full rounded-md bg-orange-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-orange-400"
              disabled={loading}
            >
              {loading ? "Loading..." : "Create account"}
            </button>
          </div>
        </div>
        <div className="mt-5">
          <p>
            Already have an account?
            <Link to="/login" className="text-orange-500 hover:text-orange-600">
              Sign in
            </Link>
          </p>
        </div>
      </form>
      </div>
      </div>
    </div>
  );
};

export default Signup;
