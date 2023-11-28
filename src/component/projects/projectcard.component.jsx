import { FaCode } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";

import { Link } from "react-router-dom";

const ProjectCard = ({image,title,gitUrl,previewUrl}) => {
    return ( 
        <div>
            <div className="h-23 md:h-40 rounded-t-xl relative group ">
                <img src={image}
                 width={600}
                 height={600}
                 alt="project" 
                 className="bg-cover rounded-t-xl rounded-b-xl"/>
            <div className="overlay absolute top-0 left-0
             w-full h-full flex items-center justify-center
            bg-[#181818] bg-opacity-0 hidden group-hover:flex 
            group-hover:bg-opacity-50 transition-all  duration-500
            ">
                <Link to={gitUrl}  className="h-14 w-14 mr-2 border-2 relative
                rounded-full border-slate-200 hover:border-white 
                group/link">
                <FaCode className="h-10 w-10 text-slate-300
                 cursor-pointer group-hover/link:text-yellow-500 absolute  top-1/2 left-1/2 
                 transform -translate-x-1/2 -translate-y-1/2"/>
               </Link>
               <Link to={previewUrl} className="h-14 w-14 border-2 relative
                rounded-full border-slate-200 hover:border-white 
                group/link">
                <FaEye className="h-10 w-10 text-slate-300
                 cursor-pointer group-hover/link:text-yellow-500 absolute  top-1/2 left-1/2 
                 transform -translate-x-1/2 -translate-y-1/2"/>
               </Link>

            </div>
                    </div>

            <div className="text-white rounded-b-2xl rounded-s-2xl bg-[#101010]
             sm:mt-7  py-3 px-3">
                <h5 className="text-lg font-semibold hover:text-yellow-500
                hover:cursor-pointer ">{title}</h5>
            </div>
        </div>

     );
}
 
export default ProjectCard;