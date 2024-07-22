import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectSummary from "./components/project/ProjectSummary";
import Navbar from "./components/layout/Navbar";
import CreateProject from "./components/project/CreateProject";
import Signup from "./components/auth/Signup";
import Signin from "./components/auth/Signin";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={Dashboard} />
        <Route path="/project/:id" Component={ProjectSummary} />
        <Route path="/create" Component={CreateProject} />
        <Route path="/signup" Component={Signup} />
        <Route path="/signin" Component={Signin} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
