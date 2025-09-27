import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import InputBar from "./InputBar";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <nav className="p-7 flex  justify-between items-center">
      <div>
        <h1 className="font-bold text-xl">X Market</h1>
      </div>
      <div className="flex gap-14 font-medium ">
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
          setValue={setSearchQuery}
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
      </div>
    </nav>
  );
}
