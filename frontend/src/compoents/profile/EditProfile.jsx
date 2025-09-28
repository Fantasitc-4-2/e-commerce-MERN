import React, { useState } from "react";
import InputBar from "../InputBar";
const EditProfile = () => {
  const [profileEdit, setProfileEdit] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    currentPasword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileEdit({ ...profileEdit, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setProfileEdit({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      currentPasword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };
  return (
    <>
      <h1 className="font-medium text-xl text-[#e53e3e] mb-3">
        Edit Your Profile
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between mb-6">
          <div>
            <label htmlFor="fName" className="font-medium">
              First Name
            </label>
            <InputBar
              placeholder="Morph"
              classes="bg-gray-100 w-84"
              id="fName"
              name="firstName"
              handleChange={handleChange}
              value={profileEdit.firstName}
            />
          </div>
          <div>
            <label htmlFor="lName" className="font-medium">
              Last Name
            </label>
            <InputBar
              placeholder="Morph"
              classes="bg-gray-100 w-84"
              id="lName"
              name="lastName"
              handleChange={handleChange}
              value={profileEdit.lastName}
            />
          </div>
        </div>
        <div className="flex justify-between  mb-6">
          <div>
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <InputBar
              placeholder="Morph@gmail.com"
              classes="bg-gray-100 w-84"
              id="email"
              name="email"
              handleChange={handleChange}
              value={profileEdit.email}
            />
          </div>
          <div>
            <label htmlFor="address" className="font-medium">
              Address
            </label>
            <InputBar
              placeholder="6 OCTOBER"
              classes="bg-gray-100 w-84"
              id="address"
              name="address"
              handleChange={handleChange}
              value={profileEdit.address}
            />
          </div>
        </div>

        <div>
          <label className="font-medium">Password Changes</label>
          <InputBar
            placeholder="Current Password"
            classes="bg-gray-100 my-3"
            id="currentPasword"
            name="currentPasword"
            handleChange={handleChange}
            value={profileEdit.currentPasword}
            type="password"
          />
          <InputBar
            placeholder="New Password"
            classes="bg-gray-100 my-3"
            name="newPassword"
            handleChange={handleChange}
            value={profileEdit.newPassword}
            type="password"
          />
          <InputBar
            placeholder="Confirm New Password"
            classes="bg-gray-100 my-3"
            name="confirmPassword"
            handleChange={handleChange}
            value={profileEdit.confirmPassword}
            type="password"
          />
        </div>
        <div className="flex flex-row-reverse">
          <button className="bg-[#e53e3e] text-white px-12 py-3 rounded">
            Save Changes
          </button>
        </div>
      </form>
    </>
  );
};

export default EditProfile;
