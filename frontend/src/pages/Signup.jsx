import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../slices/authSlice";
const Signup = () => {
  const dispatch = useDispatch();

  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [userData, setUserData] = useState({
    phoneNumber: "",
    username: "",
    email: "",
    password: "",
  });
  const [focusedInput, setFocusdInput] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    if (
      !userData.phoneNumber ||
      !userData.email ||
      !userData.username ||
      !userData.password
    ) {
      setFormError("All fields are required!");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) return setFormError("Invalid email");
    const phoneNumberRegex = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/g;
    if (!phoneNumberRegex.test(userData.phoneNumber))
      return setFormError("Invalid Phone Number");
    const strongPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    if (!strongPassword.test(userData.password)) {
      return setFormError(
        "Password must include uppercase, number, and special char"
      );
    }
    setFormLoading(true);
    try {
      await dispatch(registerUser(userData)).unwrap();
      navigate(`/otp/${userData.email}`);
    } catch (err) {
      setFormError(err);
    } finally {
      setFormLoading(false);
    }
  };
  return (
    <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
      <div className="flex">
        <div className="w-1/2 hidden lg:flex items-center justify-center">
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
              <h2
                className={`text-4xl font-semibold tracking-tight  sm:text-5xl transition-all ${
                  focusedInput ? "text-[#DB4444]" : "text-black"
                }`}
              >
                Create an account
              </h2>
              <p className="mt-2 text-lg/8 text-gray-400">
                Enter your details below
              </p>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2 relative">
                <label
                  htmlFor="username"
                  className={`absolute text-sm/6 font-semibold transform transition-all opacity-25 ${
                    focusedInput === "username" || userData.username
                      ? "text-[#DB4444] opacity-100"
                      : "text-gray-700 translate-y-6"
                  }`}
                >
                  username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    type="text"
                    name="username"
                    autoComplete="given-name"
                    className="block w-full  bg-white/5 p-3 border-b-1 border-[#ddd] focus:border-b-[#DB4444] text-base focus:outline-none"
                    onFocus={() => setFocusdInput("username")}
                    onBlur={() => setFocusdInput("")}
                    value={userData.username}
                    onChange={(e) =>
                      setUserData({ ...userData, username: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="relative sm:col-span-2">
                <label
                  htmlFor="email"
                  className={`absolute text-sm/6 font-semibold transition-all opacity-25 ${
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
                    className="block w-full peer  bg-white/5 p-3 border-b-1 border-[#ddd] focus:border-b-[#DB4444] transition-all duration-300 text-base placeholder:text-gray-500 focus:outline-none "
                    value={userData.email}
                    onFocus={() => setFocusdInput("email")}
                    onBlur={() => setFocusdInput("")}
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
                  htmlFor="phoneNumber"
                  className={`absolute text-sm/6 font-semibold transform transition-all opacity-25 ${
                    focusedInput === "phoneNumber" || userData.phoneNumber
                      ? "text-[#DB4444] opacity-100"
                      : "text-gray-700 translate-y-5"
                  }`}
                >
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    id="phoneNumber"
                    type="text"
                    name="phoneNumber"
                    autoComplete="given-name"
                    className="block w-full bg-white/5 p-3 text-base border-[#ddd] border-b-1 focus:border-b-[#DB4444] placeholder:text-gray-500 focus:outline-none"
                    value={userData.phoneNumber}
                    onFocus={() => setFocusdInput("phoneNumber")}
                    onBlur={() => setFocusdInput("")}
                    onChange={(e) =>
                      setUserData({ ...userData, phoneNumber: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="relative sm:col-span-2">
                <label
                  htmlFor="password"
                  className={`absolute text-sm/6 font-semibold transition-all opacity-25 ${
                    focusedInput === "password" || userData.password
                      ? "text-[#DB4444] opacity-100"
                      : "text-gray-700 translate-y-5"
                  }`}
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    autoComplete="given-name"
                    className="block w-full  bg-white/5 p-3 border-b-1 text-base border-[#ddd] focus:border-b-[#DB4444] placeholder:text-gray-500 focus:outline-none"
                    value={userData.password}
                    onFocus={() => setFocusdInput("password")}
                  
                    onBlur={() => setFocusdInput("")}
                    onChange={(e) =>
                      setUserData({ ...userData, password: e.target.value })
                    }
                  />
                </div>
              </div>
              {formError && (
                <div className="sm:col-span-2 text-red-500 text-sm">
                  {formError}
                </div>
              )}
              <div className="mt-10 sm:col-span-2">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-[#DB4444] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-[#f41414] "
                  disabled={formLoading}
                >
                  {formLoading ? "Loading..." : "Create account"}
                </button>
              </div>
            </div>
            <div className="mt-5">
              <p>
                Already have an account?
                <Link
                  to="/login"
                  className="text-[#DB4444] hover:text-[#f41414]"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        
      </div>
    </div>
  );
};

export default Signup;
