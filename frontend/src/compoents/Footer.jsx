import React, { useState } from "react";
import InputBar from "./InputBar";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleChange = (e) => setEmail(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    setEmail("");
  };

  return (
    <footer className="bg-black p-8 md:p-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 md:flex-col lg:flex-row lg:gap-10">
        <div className="flex flex-col md:flex-row gap-10 md:gap-10">
          <div className="flex-1 flex flex-col gap-5 text-white">
            <h1 className="text-2xl font-semibold">Exclusive</h1>
            <h2 className="text-xl font-semibold">Subscribe</h2>
            <p>Get 10% off your first order</p>
            <form onSubmit={handleSubmit}>
              <InputBar
                placeholder="Enter your email"
                classes="bg-black border-2 border-white"
                value={email}
                handleChange={handleChange}
              >
                <button className="hover:cursor-pointer" type="submit">
                  <PaperAirplaneIcon className="h-6 w-6 text-white" />
                </button>
              </InputBar>
            </form>
          </div>

          <div className="flex-1 flex flex-col gap-5 text-white">
            <h1 className="text-2xl font-semibold">Support</h1>
            <p>6 October 🔥🔥🔥🔥</p>
            <p>fantastic4+2@gmail.com</p>
            <p>+1111-2222-3333</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-10">
          <div className="flex-1 flex flex-col gap-5 text-white">
            <h1 className="text-2xl font-semibold">Account</h1>
            <Link to="/profile">My Account</Link>
            <Link to="/signup">Login / Register</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/">Shop</Link>
          </div>

          <div className="flex-1 flex flex-col gap-5 text-white">
            <h1 className="text-2xl font-semibold">Download App</h1>
            <p className="text-xs text-gray-400">Save $3 with App New User Only</p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4sZF3qL-a-aQI98aJJm2xkvTFKfdYezZdUw&s"
                alt="qr code"
                className="w-20"
              />
              <div className="flex flex-col gap-2 sm:gap-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1024px-Google_Play_Store_badge_EN.svg.png"
                  alt=""
                  className="w-40 sm:w-52"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                  alt=""
                  className="w-40 sm:w-52"
                />
              </div>
            </div>
            <div className="flex gap-4 text-2xl mt-4">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
