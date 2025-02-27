import { useTransition,useState } from "react";
import TabButton from "./tabbutton";
import profile from '../../../public/assets/profile.jpeg'

const TAB_DATA=[
    {
        title:'Education',
        id:'education',
        content: (
            <ul className="list-disc pl-2">
            <li>Information Technology</li>
            <li>SNS College Of Engineering</li>
            <li>8.97 CGPA</li>
             </ul>
        )
    },

    {
        title:'Skills',
        id:'skills',
        content: (
            <ul className="list-disc pl-2">
            <li>React JS</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
 

             </ul>
        )
    },
    

    {
        title:'Hobbies',
        id:'hobbies',
        content: (
            <ul className="list-disc pl-2">
            <li>Drawing</li>
            <li>Dance</li>
            <li>Gym</li>
             </ul>
        )
    },
    
    ]

const AboutSection = () => {


    const [tab,setTab]=useState('skills');
    const [isPending,startTransition] = useTransition();

    const handleTabChange=(id)=>{
        startTransition(()=>{
            setTab(id);
        })
    }
    return (
        <section className="text-white md:mt-20">
            <div className="md:grid md:grid-cols-2 
            gap-8 items-center py-8 px-4 xl:gap-16 
            sm:py-16 xl:px-16">
                <img src={profile}
                 alt="developer's"
                  width={400} height={400}
                  className=" rounded-full" />
                 <div className="mt-4 md:mt-0 ">
                    <h2 className="text-yellow-500 text-4xl  
                    font-bold ">About Me</h2>
                    <p className="text-base md:text-lg mt-4">Passinate Software Developer specializing in modern web Technologies like React, Vite, Nextjs and javaScript.
                    Currently working at <strong>MindfulAi Technologies</strong>, where I build scalable, efficient, and user-friendly applications. 
                    I love solving complex problems and continuously learning new technologies to enhance my skills.
                    </p>
                    
                    <div className="flex flex-row justify-start 
                    mt-8">
                    <TabButton selectTab={()=> handleTabChange("education") }
                     active={tab === "education"}>
                         {" "}
                         Education {" "} 
                         </TabButton>
                    <TabButton selectTab={()=> handleTabChange("skills") }
                     active={tab === "skills"}>
                         {" "}
                         Skills {" "} 
                         </TabButton>

                         <TabButton selectTab={()=> handleTabChange("hobbies") }
                     active={tab === "hobbies"}>
                         {" "}
                         Hobbies {" "} 
                         </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t)=> t.id === tab).content}
                    </div>
                 </div>
            </div>
        </section>

     );
}
 
export default AboutSection;