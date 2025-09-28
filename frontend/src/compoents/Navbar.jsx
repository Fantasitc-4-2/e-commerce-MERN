import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import InputBar from "./InputBar";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <nav className="px-7 pt-7 pb-3 flex  justify-evenly items-center border-b-2 border-gray-200">
      <div>
        <h1 className="font-bold text-2xl">X Market</h1>
      </div>
      <div className="flex gap-12 font-medium ">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "underline decoration-2 decoration-gray-300 underline-offset-4"
              : ""
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "underline decoration-2 decoration-gray-300 underline-offset-4"
              : ""
          }
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "underline decoration-2 decoration-gray-300 underline-offset-4"
              : ""
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "underline decoration-2 decoration-gray-300 underline-offset-4"
              : ""
          }
          to="/signup"
        >
          Sign Up
        </NavLink>
      </div>
      <div className="flex items-center gap-4">
        <InputBar
          placeholder={"What are you looking for"}
          classes="bg-gray-100"
          value={searchQuery}
          handleChange={handleChange}
        >
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-800" />
        </InputBar>
        <Link to="/wishList">
          <HeartIcon className="h-6 w-6 text-gray-800" />
        </Link>

        <Link to="/cart">
          {" "}
          <ShoppingCartIcon className="h-6 w-6 text-gray-800" />
        </Link>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "bg-[#e53e3e] p-2 rounded-3xl text-white"
              : "text-gray-800"
          }
        >
          <UserIcon className="h-6 w-6 " />
        </NavLink>
      </div>
    </nav>
  );
}
