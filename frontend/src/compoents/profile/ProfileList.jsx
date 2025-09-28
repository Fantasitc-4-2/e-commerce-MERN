const ProfileList = ({ title, items = [], handleActive, activeItem }) => {
  return (
    <div className="mb-3">
      <h1 className="font-medium mb-3">{title}</h1>
      <ul className="ml-6">
        {items.map((item, index) => (
          <li
            key={index}
            className={`text-sm   leading-loose hover:cursor-pointer ${
              activeItem === item ? "text-[#e53e3e]" : "text-gray-500"
            }`}
            onClick={() => handleActive(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileList;
