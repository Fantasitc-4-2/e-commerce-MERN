import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const InputBar = ({ children, placeholder, classes, value, setValue }) => {
  return (
    <div className={`flex items-center rounded-md  px-4 py-2 ${classes}`}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="mr-8 w-full focus:outline-none"
      />
      {children}
    </div>
  );
};

export default InputBar;
