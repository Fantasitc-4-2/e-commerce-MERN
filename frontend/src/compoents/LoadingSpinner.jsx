import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
      <div className="w-32 h-32 border-4 border-gray-300 border-t-[#DB4444] rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
