import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Link } from "react-router";
const StickyBar = () => {
  const [language, setLanguage] = useState("en");
  return (
    <div className="bg-black flex p-3  items-center ">
      <div className="text-white basis-11/12  text-center ">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link className="font-bold underline ml-2">ShopNow</Link>
        </p>
      </div>
      <div className="text-white  flex items-center">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-black rounded-2xl focus:outline-none appearance-none p-2"
        >
          <option value="en">English </option>
          <option value="ar">Arabic</option>
        </select>
        <ChevronDownIcon className="h-4 w-4  text-white inline" />
      </div>
    </div>
  );
};

export default StickyBar;
