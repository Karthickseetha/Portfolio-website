import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { RiBootstrapFill } from "react-icons/ri";


const SkillSection = () => {
    return ( 
        <div className="py-8 px-4 xl:gap-16 sm:py-16
        xl:px-16">
               <h2 className="text-yellow-500 text-4xl font-bold text-center">
        SKills
        </h2>
            <div className="border-[#33353f] border rounded-md py-4 
            px-10 flex flex-row items-center justify-center hover:border-yellow-500 hover:bg-[#181818] mt-3">
             
        <div className="flex flex-row items-center
        justify-center mx-4 gap-7 ">
        
            <IoLogoJavascript className="text-white hover:text-yellow-500 
            hover:cursor-pointer text-6xl"/>
            <RiReactjsLine  className="text-white hover:cursor-pointer hover:text-yellow-500 text-6xl"/>
            <IoLogoHtml5  className="text-white hover:cursor-pointer hover:text-yellow-500 text-6xl"/>
            <FaCss3Alt  className="text-white hover:cursor-pointer hover:text-yellow-500 text-6xl"/>
            <RiBootstrapFill className="text-white hover:cursor-pointer hover:text-yellow-500 text-6xl"/>

            </div>
            </div>
        </div>
     );
}
 
export default SkillSection;