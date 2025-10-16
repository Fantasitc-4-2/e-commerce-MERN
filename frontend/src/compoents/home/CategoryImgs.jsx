import { useState } from "react";
import { useNavigate } from "react-router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiHeadphones } from "react-icons/ci";
import { LuGamepad } from "react-icons/lu";
import { SlScreenSmartphone } from "react-icons/sl";
import SectionName from "../SectionName";

export default function CategoryImgs() {
  const [category] = useState([
    {
      Camera: <IoCameraOutline />,
    },
    { Phone: <SlScreenSmartphone /> },
    { "Smart Watch": <BsSmartwatch /> },
    { Computer: <HiOutlineDesktopComputer /> },
    { "Head Phone": <CiHeadphones /> },
    { Gaming: <LuGamepad /> },
    {
      Camera: <IoCameraOutline />,
    },
    { Phone: <SlScreenSmartphone /> },
    { "Smart Watch": <BsSmartwatch /> },
  ]);
  const [startIndex, setStartIndex] = useState(0);
  const sliced = category.slice(startIndex, startIndex + 6);
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate(`/${e}`);
  };
  const handleNext = () => {
    if (startIndex < category.length - 6) setStartIndex(startIndex + 1);
  };
  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };
  return (
    <div className="mx-20">
        <SectionName section="Category"/>
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold">Browse By Category</h2>
        <div className="w-[7%] flex justify-around text-sm">
          <button
            onClick={handlePrev}
            className="bg-[#ddd] p-2 rounded-4xl cursor-pointer "
          >
            <ArrowBackIcon />
          </button>
          <button
            onClick={handleNext}
            className="bg-[#ddd] p-2 rounded-4xl cursor-pointer"
          >
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-6">
        {sliced.map((c) => {
          const name = Object.keys(c)[0];
          const img = Object.values(c)[0];
          return (
            <div
              onClick={() => handleClick(name)}
              value={name}
              className="m-5 cursor-pointer border rounded-md border-[#ddd] h-40 text-center flex flex-col justify-around hover:translate-y-2 hover:bg-[#DB4444] hover:text-white transition-all"
              key={name}
            >
              <div className="text-6xl flex justify-center">{img}</div>
              <h3 className="text-2xl">{name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
