import React, { useState } from "react";

import ProfileContent from "../compoents/profile/ProfileContent";
import ProfileSideBar from "../compoents/profile/ProfileSideBar";

const Profile = () => {
  const [activeItem, setActiveItem] = useState("My Profile");
  const handleActive = (item) => {
    setActiveItem(item);
  };
  return (
    <div className="container mx-auto mb-32 mt-10 relative pt-30 flex justify-center gap-60">
      <div className="absolute top-0 left-28 flex gap-2">
        <p className="text-gray-500 font-semibold text-sm">Home </p>
        <p className="text-gray-500 font-semibold text-sm">/</p>
        <p className="text-black font-bold text-sm">My Account</p>
      </div>
      <div className="absolute top-0 right-28 flex gap-1">
        <p className="text-black font-bold text-sm">Welcome!</p>
        <p className="text-[#e53e3e] font-semibold text-sm">Morph </p>
      </div>
      <ProfileSideBar activeItem={activeItem} handleActive={handleActive} />
      <ProfileContent activeItem={activeItem} />
    </div>
  );
};

export default Profile;
