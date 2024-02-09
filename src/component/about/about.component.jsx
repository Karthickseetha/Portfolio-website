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
                    <p className="text-base md:text-lg mt-4">I'm a front-end developer with a passion for creating 
                        interactive and responsive web applications, I have experience
                        working with JavaScript,React,HTML,CSS,and Git.I am a pasitive
                        thinker,quick learner and I am always looking to expand my 
                        knowledge and skill set.I am excited for wonderful opportunity.
 
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