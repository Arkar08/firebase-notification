/* eslint-disable react/prop-types */
const ProjectOne = ({ project }) => {
  return (
    <div className="border w-[400px] border-black p-4 rounded-md">
      <h1 className="text-2xl font-bold">{project.title}</h1>
      <h2 className="text-xl">{project.content}</h2>
      <p className="text-end">23rd july 2024</p>
    </div>
  );
};

export default ProjectOne;
