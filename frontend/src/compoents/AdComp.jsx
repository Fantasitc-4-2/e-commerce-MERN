import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { SiApple } from "react-icons/si";

export default function AdComp({img,title,section}) {
  return (
    <div className='col-span-5 md:col-span-4 bg-black md:m-4 overflow-hidden'>
      <div className="grid grid-cols-4 h-[350px]">
        <div className="text-white mx-10 flex flex-col justify-around">
          <div className="flex items-center">
           <SiApple  className="text-xl md:text-3xl m-2" /><h2 className="text-2xl">{title}</h2>
          </div>
          <h3 className="text-6xl font-bold text-[#FB7F33]">{section}</h3>
          <div className="flex items-center hover:translate-x-5 duration-300 transition-all hover:text-[#FB7F33] hover:underline">
          <h3 className="text-sm md:text-3xl">Shop Now</h3>
          <div className="mx-2">
           <ArrowForwardIcon />
           </div>
          </div>
        </div>
        <div className="col-span-3 md:flex  justify-center overflow-hidden hidden">
          <img className=" hover:scale-105 translate-y-5 hover:translate-y-0 hover:motion-safe:animate-pulse duration-500 transition-all" src={`${img}`} alt="" />
        </div>
      </div>
    </div>
  );
}
