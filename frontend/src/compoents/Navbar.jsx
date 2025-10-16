import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import InputBar from "./InputBar";
import ProfileDropdown from "./profile/ProfileDropDown";
import { useDispatch, useSelector } from "react-redux";
import { fetchMe, logoutUser } from "../slices/authSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    dispatch(fetchMe()).unwrap();
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `hover:text-[#DB4444] transition-colors ${isActive ? "text-[#DB4444] font-semibold" : ""}`;

  const mobileNavClass = ({ isActive }) =>
    `py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors ${
      isActive ? "bg-[#DB4444] text-white font-semibold" : "text-gray-700"
    }`;

  const iconClass = "h-6 w-6 text-gray-700 hover:text-[#DB4444] transition-colors";

  const ActionIcons = () => (
    <>
      <Link to="/wishList" className="p-2 hover:bg-gray-100 rounded-full transition-all">
        <HeartIcon className={iconClass} />
      </Link>
      <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full transition-all">
        <ShoppingCartIcon className={iconClass} />
      </Link>
      <div className="relative" ref={menuRef}>
        <button
          className={`p-2 rounded-full transition-all ${
            isOpen ? "bg-[#DB4444] text-white" : "hover:bg-gray-100 text-gray-700"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <UserIcon className="h-6 w-6" />
        </button>
        {isOpen && <ProfileDropdown />}
      </div>
    </>
  );

  const NavLinks = () => (
    <>
      <NavLink className={navLinkClass} to="/">Home</NavLink>
      <NavLink className={navLinkClass} to="/contact">Contact</NavLink>
      <NavLink className={navLinkClass} to="/about">About</NavLink>
    </>
  );

  const AuthLinks = () =>
    user ? (
      <>
        <NavLink className={navLinkClass} to="/profile">{user.username}</NavLink>
        <button className="text-gray-700 hover:text-[#DB4444] transition-colors" onClick={() => dispatch(logoutUser())}>
          Logout
        </button>
      </>
    ) : (
      <>
        <NavLink className={navLinkClass} to="/signup">Sign Up</NavLink>
        <NavLink className={navLinkClass} to="/login">Log In</NavLink>
      </>
    );

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="px-4 lg:px-8 py-4">
          <div className="max-w-7xl mx-auto">
            <div className="md:hidden flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <button className="text-gray-700 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
                </button>
                <Link to="/">
                  <h1 className="font-bold text-2xl text-gray-900 hover:text-[#DB4444] transition-colors">X Market</h1>
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <ActionIcons />
              </div>
            </div>

            <div className="hidden md:flex lg:hidden items-center justify-center gap-8">
              <Link to="/">
                <h1 className="font-bold text-2xl text-gray-900 hover:text-[#DB4444] transition-colors">X Market</h1>
              </Link>
              <div className="flex items-center gap-8 font-medium text-gray-700">
                <NavLinks />
                <AuthLinks />
                <ActionIcons />
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-between gap-8">
              <div className="flex items-center gap-8">
                <Link to="/">
                  <h1 className="font-bold text-3xl text-gray-900 hover:text-[#DB4444] transition-colors">X Market</h1>
                </Link>
                <div className="flex items-center gap-7 font-medium text-gray-700">
                  <NavLinks />
                </div>
              </div>
              <div className="flex-1 max-w-xl">
                <InputBar
                  placeholder="What are you looking for"
                  classes="bg-gray-50 hover:bg-gray-100 transition-colors w-full"
                  value={searchQuery}
                  handleChange={(e) => setSearchQuery(e.target.value)}
                >
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-600" />
                </InputBar>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-6 font-medium text-gray-700">
                  <AuthLinks />
                </div>
                <ActionIcons />
              </div>
            </div>

            <div className="md:hidden mt-3">
              <InputBar
                placeholder="What are you looking for"
                classes="bg-gray-50 w-full"
                value={searchQuery}
                handleChange={(e) => setSearchQuery(e.target.value)}
              >
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-600" />
              </InputBar>
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300" onClick={() => setIsMenuOpen(false)} />
      )}

      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-bold text-xl text-gray-900">Menu</h2>
            <button onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-gray-900">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <NavLink className={mobileNavClass} to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink className={mobileNavClass} to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
            <NavLink className={mobileNavClass} to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
            <div className="border-t border-gray-200 my-4" />
            {user ? (
              <>
                <NavLink className={mobileNavClass} to="/profile" onClick={() => setIsMenuOpen(false)}>{user.username}</NavLink>
                <button
                  className="py-3 px-4 rounded-lg text-left text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={() => {
                    dispatch(logoutUser());
                    setIsMenuOpen(false);
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink className={mobileNavClass} to="/signup" onClick={() => setIsMenuOpen(false)}>Sign Up</NavLink>
                <NavLink className={mobileNavClass} to="/login" onClick={() => setIsMenuOpen(false)}>Log In</NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
