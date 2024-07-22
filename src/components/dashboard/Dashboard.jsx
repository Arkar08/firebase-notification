import ProjectList from "../project/ProjectList";
import Notification from "./Notification";

const Dashboard = () => {
  return (
    <div className="flex justify-around mt-8">
      <div>
        <ProjectList />
      </div>
      <div>
        <Notification />
      </div>
    </div>
  );
};
export default Dashboard;
