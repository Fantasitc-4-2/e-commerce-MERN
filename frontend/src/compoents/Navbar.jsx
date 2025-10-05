import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import InputBar from "./InputBar";
import ProfileDropdown from "./profile/ProfileDropDown";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
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
        <div className="relative" ref={menuRef}>
          <button
            className={`hover:cursor-pointer   ${
              isOpen
                ? "bg-[#DB4444] text-white rounded-2xl p-1"
                : "text-gray-800"
            }`}
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            <UserIcon className="h-6 w-6 " />
          </button>
          {isOpen && <ProfileDropdown />}
        </div>
      </div>
    </nav>
  );
}
