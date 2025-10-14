import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function AdComp({img,title,section}) {
  return (
    <div className={`sm:col-span-4 bg-black mx-4`}>
      <div className="grid grid-cols-4 h-[400px]">
        <div className="text-white mx-10 flex flex-col justify-center space-y-6">
          <h2 className="text-xl">{title}</h2>
          <h3 className="text-6xl font-bold">{section}</h3>
          <div className="flex items-center hover:translate-x-5 duration-300 transition-all hover:text-[#DB4444] hover:underline">
          <h3 className="text-2xl">Shop Now</h3>
          <div className="mx-2">
           <ArrowForwardIcon />
           </div>
          </div>
        </div>
        <div className="col-span-3 overflow-hidden flex justify-center">
          <img className="h-max-[80%] object-contain hover:scale-110 duration-500 transition-all" src={`${img}`} alt="" />
        </div>
      </div>
    </div>
  );
}
