import ProjectCard from "./projectcard.component";
import { projectData } from "../../constants";

const ProjectSection = () => {
    return ( <>
    <section className="md:mt-20 ">
        <h2 className="text-center text-4xl font-bold
        text-yellow-500 mt-4 ">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-3 mt-4">
            {projectData.map((project) =>(
             <ProjectCard 
             key={project.id} 
             {...project}
              />
              ))}
              </div>
              </section>
        </>
     );
}
 
export default ProjectSection;