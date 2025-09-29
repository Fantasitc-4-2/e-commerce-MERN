import { Link, NavLink } from "react-router-dom";

const ProfileList = ({ title, items = [{}] }) => {
  return (
    <div className="mb-3">
      <h1 className="font-medium mb-3">{title}</h1>
      <ul className="ml-6">
        {items.map((item, index) => (
          <NavLink
            to={`/profile/${item.link}`}
            className={({ isActive }) =>
              isActive ? "text-[#e53e3e]" : "text-gray-500"
            }
          >
            <li
              key={index}
              className={`text-sm   leading-loose hover:cursor-pointer}`}
            >
              {item.item}
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default ProfileList;
