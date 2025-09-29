import {
  FaUser,
  FaShoppingBag,
  FaTimesCircle,
  FaStar,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProfileDropdown() {
  return (
    <div className="absolute right-0 mt-2 w-56 rounded-xl shadow-lg bg-gray-500/70 backdrop-blur-md text-white p-4 z-50">
      <ul className="space-y-3">
        <Link to="profile/edit">
          <li className="flex items-center gap-3 hover:text-purple-200 cursor-pointer">
            <FaUser className="h-5 w-5" /> Manage My Account
          </li>
        </Link>
        <Link to="/">
          <li className="flex items-center gap-3 hover:text-purple-200 cursor-pointer">
            <FaShoppingBag /> My Order
          </li>
        </Link>
        <Link to="profile/cancellations">
          <li className="flex items-center gap-3 hover:text-purple-200 cursor-pointer">
            <FaTimesCircle /> My Cancellations
          </li>
        </Link>
        <Link to="/">
          <li className="flex items-center gap-3 hover:text-purple-200 cursor-pointer">
            <FaStar /> My Reviews
          </li>
        </Link>

        <li className="flex items-center gap-3 hover:text-purple-200 cursor-pointer">
          <FaSignOutAlt /> Logout
        </li>
      </ul>
    </div>
  );
}
