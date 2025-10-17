import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import { SiApple } from "react-icons/si";

export default function AdComp({img,logo,title,section,color,height}) {
  const [hovered,setHovered] = useState(false)
  return (
    <div className='col-span-5 lg:col-span-4 bg-black md:m-4 overflow-hidden'>
      <div className="grid grid-cols-4 h-[350px]" style={{height}}>
        <div className="text-white mx-10 flex flex-col justify-around">
          <div className="flex items-center">
           {logo&&logo}<h2 className="hidden sm:block md:text-xl lg:text-2xl">{title}</h2>
          </div>
          <h3 className='text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold' style={{color}}>{section}</h3>
          <div 
          onMouseEnter={()=>setHovered(true)}
          onMouseLeave={()=>setHovered(false)}
          style={{color:hovered?color:"white"}}
          className={`flex items-center hover:translate-x-5 duration-300 transition-all hover:text-[#FB7F33] hover:underline`}>
          <h3 className="text-sm md:text-3xl">Shop Now</h3>
          <div className="mx-2">
           <ArrowForwardIcon />
           </div>
          </div>
        </div>
        <div className="col-span-3 md:flex  justify-center overflow-hidden translate-y-35 scale-80 sm:scale-90 sm:translate-y-10">
          <img className=" hover:scale-105 translate-y-5  hover:motion-safe:animate-pulse duration-500 transition-all" src={`${img}`} alt="" />
        </div>
      </div>
    </div>
  );
}
