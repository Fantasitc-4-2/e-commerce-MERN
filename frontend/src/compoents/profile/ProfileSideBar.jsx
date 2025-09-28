import React from "react";
import ProfileList from "./ProfileList";
const ProfileSideBar = ({ activeItem, handleActive }) => {
  return (
    <>
      <aside>
        <ProfileList
          title="Manage My Account"
          items={["My Profile", "Address Book", "My Payment Options"]}
          handleActive={handleActive}
          activeItem={activeItem}
        />
        <ProfileList
          title="My Orders"
          items={["My Returns", "My Cancellations"]}
          handleActive={handleActive}
          activeItem={activeItem}
        />

        <div>
          <h1 className="font-medium mb-3"> My WishList</h1>
        </div>
      </aside>
    </>
  );
};

export default ProfileSideBar;
