import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function ForgetPassword() {
  const { email } = useParams();
  const [otp, setOtp] = useState();
  const [userEmail, setUserEmail] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    const otpRegex = /[0-9]{6}/;
    if (!otpRegex.test(otp)) return setError("Invalid OTP");
    setLoading(true);
    
  };
  return (
    <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto mx-w-2xl text-center">
        <h2 class="text-4xl font-semibold tracking-tight  sm:text-5xl">
          Verify Your Email
        </h2>
        <p class="mt-2 text-lg/8 text-gray-400">Enter your email below</p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label for="otp" className="text-sm/6 font-semibold">
              OTP
            </label>
            <div className="mt-2">
              <input
                id="otp"
                type="otp"
                name="otp"
                placeholder="123456"
                className="block w-full  bg-white/5 p-3 border-b-1 text-base placeholder:text-gray-500 "
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
          </div>
          {error && (
            <div className="sm:col-span-2 text-orange-500">{error}</div>
          )}
          <div class="mt-10 sm:col-span-2">
            <button
              type="submit"
              class="block w-full rounded-md bg-orange-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-orange-400"
              disabled={loading}
            >
              {loading ? "Loading..." : "Submit OTP"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
