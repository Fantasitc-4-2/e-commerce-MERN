import AddressBook from "./AddressBook";
import EditProfile from "./EditProfile";
import MyCancellations from "./MyCancellations";
import MyReturns from "./MyReturns";
import PaymentOptions from "./PaymentOptions";

const ProfileContent = ({ activeItem }) => {
  return (
    <div className="w-[60%] shadow-lg px-16 py-8">
      {activeItem === "My Profile" && <EditProfile />}
      {activeItem === "Address Book" && <AddressBook />}
      {activeItem === "My Payment Options" && <PaymentOptions />}
      {activeItem === "My Returns" && <MyReturns />}
      {activeItem === "My Cancellations" && <MyCancellations />}
    </div>
  );
};

export default ProfileContent;
