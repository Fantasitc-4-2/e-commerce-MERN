import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { loginUser } from "../slices/authSlice";

export default function Login() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) return setError("Invalid email");
    setLoading(true);
    try{
      await dispatch(loginUser(userData)).unwrap()
      navigate("/");
    }catch(err){
      setError(err)
    }finally{
       setLoading(false);
    }
   
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

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="mx-auto mx-w-2xl text-center">
            <h2 class="text-4xl font-semibold tracking-tight  sm:text-5xl">
              Log in to Exclusive
            </h2>
            <p class="mt-2 text-lg/8 text-gray-400">Enter your details below</p>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
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
                  className="peer block w-full  bg-white/5 p-3 border-b-1 text-base placeholder:text-gray-500 focus:outline-none"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                />
                 <p class="invisible peer-invalid:visible text-red-500 text-sm">Please provide a valid email address.</p>
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
              <div className="sm:col-span-2 text-orange-500">{error}</div>
            )}
            <div class="mt-10">
              <button
                type="submit"
                class="block w-full rounded-md bg-orange-500 p-3 text-center text-sm font-semibold text-white shadow-xs hover:bg-orange-400"
                disabled={loading}
              >
                {loading ? "Loading..." : "Log in"}
              </button>
            </div>
            <div class="mt-10">
              <Link to="/forget-password" className="text-orange-500 p-2 flex justify-center">
                Forget Password?
              </Link>
            </div>
          </div>
          <div className="mt-5 sm:col-span-1">
            <p>
              Doens't have an account?
              <Link
                to="/signup"
                className="text-orange-500 hover:text-orange-600"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
