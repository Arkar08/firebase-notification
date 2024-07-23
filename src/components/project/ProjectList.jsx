import { useSelector } from "react-redux";
import ProjectOne from "./ProjectOne";
import { Link } from "react-router-dom";

const ProjectList = () => {
  const projects = useSelector((state) => state.project.data);
  return (
    <div className="flex items-center justify-center gap-4 flex-col">
      <h1 className=" text-2xl font-bold uppercase space-x-2 ">Project List</h1>
      {projects &&
        projects.map((project) => {
          return (
            <Link key={project.id} to={`/project/${project.id}`}>
              <ProjectOne project={project} />
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;
