import ProjectOne from "./ProjectOne";

const ProjectList = () => {
  return (
    <div className="flex items-center justify-center gap-4 flex-col">
      <h1 className=" text-2xl font-bold uppercase space-x-2 ">Project List</h1>
      <ProjectOne />
      <ProjectOne />
      <ProjectOne />
      <ProjectOne />
    </div>
  );
};

export default ProjectList;
