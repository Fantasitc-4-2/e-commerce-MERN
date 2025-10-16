import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function ForgetPassword() {
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [focusedInput,setFocusdInput] = useState("")
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return setError("Invalid email");
    setLoading(true);
    setTimeout(()=>{
        setLoading(false);
        navigate("/login")
    },1500)
    
  };
  return (
    <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto mx-w-2xl text-center">
        <h2 class="text-4xl font-semibold tracking-tight  sm:text-5xl">
          Reset your password
        </h2>
        <p class="mt-2 text-lg/8 text-gray-400">Enter your email below</p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2 ">
            <label htmlFor="email" className={`absolute font-semibold opacity-25 transition-all ${focusedInput === "email" || email
                    ? "text-[#DB4444] opacity-100"
                    : "text-gray-700 translate-y-7"}`}>
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                name="email"
      
                autoComplete="given-name"
                className={`block w-full p-3 border-b-1 transition-all border-[#ddd] outline-0 focus:border-[#DB4444]`}
                value={email}
                onFocus={() => setFocusdInput("email")}
                  onBlur={() => setFocusdInput("")}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          {error&&(<div className="sm:col-span-2 text-[#DB4444]">{error}</div>)}
          <div class="mt-10 sm:col-span-2">
            <button
              type="submit"
              class="block w-full rounded-md bg-[#DB4444] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-[#f41414]"
              disabled={loading}
            >
              {loading ? "Loading..." : "Send Code"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
