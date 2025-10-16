import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { loginUser } from "../slices/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [focusedInput, setFocusdInput] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) return setError("Invalid email");
    setLoading(true);
    try {
      await dispatch(loginUser(userData)).unwrap();
      navigate("/");
    } catch (err) {
      setError(err);
    } finally {
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
            <h2 className={`text-4xl font-semibold tracking-tight sm:text-5xl transition-all ${focusedInput? "text-[#DB4444]":"text-gray-700"}`}>
              Log in to Exclusive
            </h2>
            <p className="mt-2 text-lg/8 text-gray-400">Enter your details below</p>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="relative sm:col-span-2">
              <label
                htmlFor="email"
                className={`absolute text-sm/6 font-semibold opacity-25 transition-all ${
                  focusedInput === "email" || userData.email
                    ? "text-[#DB4444] opacity-100"
                    : "text-gray-700 translate-y-5"
                }`}
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="given-name"
                  className={`peer block w-full p-3 border-b-1 placeholder:text-gray-500 focus:outline-none ${focusedInput ==="email" ?"border-[#DB4444]":"border-[#ddd]"}`}
                  onFocus={() => setFocusdInput("email")}
                  onBlur={() => setFocusdInput("")}
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                />
                <p className="invisible peer-invalid:visible text-red-500 text-sm">
                  Please provide a valid email address.
                </p>
              </div>
            </div>
            <div className="relative sm:col-span-2">
              <label
                htmlFor="password"
                className={`absolute text-sm/6 font-semibold transform transition-all ${focusedInput ==="password" || userData.password ? "text-[#DB4444] opacity-100" :"opacity-25 translate-y-5"}`}
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  name="password"
                  autoComplete="given-name"
                  className={`block w-full  bg-white/5 p-3  border-b-1 text-base placeholder:text-gray-500 focus:outline-none ${focusedInput ==="password"?"border-[#DB4444]":"border-[#ddd]"}`}
                  value={userData.password}
                  onFocus={() => setFocusdInput("password")}
                  onBlur={() => setFocusdInput("")}
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                />
              </div>
            </div>
            {error && (
              <div className="sm:col-span-2 text-orange-500">{error}</div>
            )}
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-[#DB4444] p-3 text-center text-sm font-semibold text-white shadow-xs hover:bg-[#f41414]"
                disabled={loading}
              >
                {loading ? "Loading..." : "Log in"}
              </button>
            </div>
            <div className="mt-10">
              <Link
                to="/forget-password"
                className="text-[#DB4444] p-2 flex justify-center hover:text-[#f41414]"
              >
                Forget Password?
              </Link>
            </div>
          </div>
          <div className="mt-5 sm:col-span-1">
            <p>
              Doens't have an account?
              <Link
                to="/signup"
                className="text-[#DB4444] hover:text-[#f41414]"
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
