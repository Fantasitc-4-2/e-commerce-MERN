import React from "react";
import ProfileList from "./ProfileList";
const ProfileSideBar = ({ activeItem, handleActive }) => {
  return (
    <>
      <aside>
        <ProfileList
          title="Manage My Account"
          items={[
            { item: "My Profile", link: "edit" },
            { item: "Address Book", link: "address" },
            { item: "My Payment Options", link: "payment" },
          ]}
          handleActive={handleActive}
        />
        <ProfileList
          title="My Orders"
          items={[
            { item: "My Returns", link: "returns" },
            { item: "My Cancellations", link: "cancellations" },
          ]}
          handleActive={handleActive}
        />

        <div>
          <h1 className="font-medium mb-3"> My WishList</h1>
        </div>
      </aside>
    </>
  );
};

export default ProfileSideBar;
