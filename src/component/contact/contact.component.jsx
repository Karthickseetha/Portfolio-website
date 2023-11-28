import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";


const ContactSection = () => {
    return ( 
            
            <div className="grid md:grid-cols-2 my-12 
            md:my-12  py-20 relative sm:bottom-12 gap-4 md:mt-20">
                <div className="md:mt-10">
                <h5 className="text-2xl font-bold text-yellow-500
                my-2">
                    Let' Connect
                    </h5>
                    <p className="text-white mb-4 max-w-md">
                    I'm a front-end developer with a passion for creating 
                    interactive and responsive web applications.
                 i'm currently looking for job opportunities.
                    </p>
            <div className="grid md:grid-cols-1 ">
            <MdEmail className="text-yellow-500"/>
            <span className="text-slate-300 
            
            ">karthickseetha2@gmail.com</span>
            <FaPhoneSquareAlt className="text-yellow-500" />
            <span className="text-slate-300 
           
            ">6385808140</span>
            </div>
                    <div className="flex  
        flex-wrap gap-5 mt-4 md:flex  
             ">
            
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


                </div>

            <div className="md:mt-10">

            <form action="" className="flex flex-col mt-5">
                
            <div className="mb-6">
            <label htmlFor="email" typeof="email"
             className="text-yellow-500 block
            mb-2 text-sm font-medium">Your email
            </label>
            <input type="email" 
            id="email"
            required
            className="bg-[#181818] border border-black
             placeholder-slate-200 text-slate-300 
             text-sm 
             rounded-lg block w-full p-2.5 
            "
            placeholder="your@email.com"
            />
            </div>

            <div className="mb-6">
            <label htmlFor="email" typeof="email"
             className="text-yellow-500 block
            mb-2 text-sm font-medium">Your Subject
            </label>
            <input type="text" 
            id="subject"
            required
            className="bg-[#181818] border border-black
             placeholder-slate-200 text-slate-300 
             text-sm  
             rounded-lg block w-full p-2.5 
            "
            placeholder="subject..."
            />
            </div>
            <div className="mb-6">
            <label htmlFor="message" typeof="text"
             className="text-yellow-500 block
            mb-2 text-sm font-medium">Message
            </label>
            <textarea type="message" 
            id="message"
            required
            className="bg-[#181818] border border-black
             placeholder-slate-200 text-slate-300 
             text-sm 
             rounded-lg block w-full p-2.5 
            "
            placeholder="Let's chat here..."
            />
            </div>
            <button type="submit"
          className=" py-2.5 px-5 rounded-lg w-full
          mr-4 bg-transparent  text-white hover:text-black
          border border-slate-300 mt-3 hover:bg-yellow-500">
            Send message
          </button>

            </form>
            </div>
        
        </div>
     );
}
 
export default ContactSection;