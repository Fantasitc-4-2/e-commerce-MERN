import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function ForgetPassword() {
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
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
                className="block w-full  bg-white/5 p-3 border-b-1 text-base placeholder:text-gray-500 "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          {error&&(<div className="sm:col-span-2 text-orange-500">{error}</div>)}
          <div class="mt-10 sm:col-span-2">
            <button
              type="submit"
              class="block w-full rounded-md bg-orange-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-orange-400"
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
