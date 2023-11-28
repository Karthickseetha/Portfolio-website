import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

import { useState } from "react";

const Navbar = () => {

    const [navbarOpen,setNavbarOpen] =useState(false);

    return ( 
        <nav 
        className="fixed top-0 left-0 right-0 z-10
         bg-[#181818] bg-opacity-90"> 
        <div className="flex flex-wrap items-center 
        justify-between mx-auto px-4 py-4">
            <Link to='/' 
            className="text-lg sm:text-4xl
             text-yellow-500 font-bold">
                Portfolio
            </Link>
            <div className="mobile-menu block md:hidden ">
                <button onClick={() => setNavbarOpen(!navbarOpen)} className="flex items-center px-3
                 py-2 border rounded-full border-slate-200 text-slate-200 hover:text-yellow-500 hover:border-yellow-500"> 
                    {navbarOpen ? <FaXmark className="h-4 w-4" /> : <FaBars className="h-4 w-4" />}
                </button>
            </div>

            <div className={`menu ${navbarOpen ? 'block' : 'hidden'}
             md:w-auto gap-8 md:block absolute 
             top-2 left-1/2 transform -translate-x-1/2
              py-4 px-8 rounded`}>
                <ul className="flex md:p-0 p-0  
                md:flex-row space-x-8 md:space-x-8 mt-0  ">
                    <li>
                        <Link to="/about" 
                        
                        className="py-2 pl-3 pr-4 
                        text-[#ADB7BE] sm:text-2xl 
                        rounded md:p-4
                         hover:text-yellow-500 font-bold">
                            About
                        </Link>
                        <Link to="/projects" 
                        className="py-2 pl-3 pr-4 
                        text-[#ADB7BE] sm:text-2xl
                        rounded md:p-4 font-bold
                         hover:text-yellow-500">
                            Projects
                        </Link>
                        <Link to="/contact"
                         className="py-2 pl-3 pr-4
                          text-[#ADB7BE] sm:text-2xl 
                          rounded md:p-4 font-bold
                           hover:text-yellow-500">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className={`flex ${navbarOpen ? 'hidden' : 'hidden'} 
        flex-wrap gap-5 md:flex absolute 
             top-7 left-3/4 sm:hidden` }>
        <Link to="https://www.linkedin.com/in/karthick-it/">
            <FaLinkedin 
            className="hover:text-yellow-500 
        border rounded cursor-pointer text-white text-3xl" />
        </Link>
        <Link to="https://github.com/Karthickseetha">
            <FaGithubSquare  
            className="hover:text-yellow-500 
        border rounded cursor-pointer text-white text-3xl" />
        </Link>


       </div>
    </nav>  
    
     );
}
 
export default Navbar;