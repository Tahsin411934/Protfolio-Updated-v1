import { useQuery } from "@tanstack/react-query";
import useTheme from "../../Hook/useTheme";
import axios from "axios";
import Project from "./Project";

const Projects = () => {
    const { theme } = useTheme()
    const { data:projects, isLoading, error } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const res = await axios.get('/Projects.json')
            return res.data;
        }
    })
    
    return (
        <div className={`font-Inter ${theme === 'light' ? 'bg-gray-200' : 'bg-[#111828] text-gray-300'}  m-0 p-0 h-full`}>
            <div className="text-3xl font-bold flex items-center justify-center p-10">
                <h1 className="">Latest Projects</h1>
            </div>

           <div className="lg:grid grid-cols-3 w-[85%] gap-10 h-full  gap-5 container mx-auto">
           {
                projects?.slice(0,3).map(project=><Project key={project.title} project={project}></Project>)
            }
           </div>
        </div>
    );
};

export default Projects;