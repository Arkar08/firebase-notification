import SignoutLink from "./SignoutLink";
import SignupLink from "./SignupLink";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-500 h-[80px] w-full flex items-center justify-around">
      <Link to="/">
        <h1 className="text-white text-2xl font-bold uppercase space-x-2">
          Project Idea
        </h1>
      </Link>
      <SignoutLink />
      <SignupLink />
    </div>
  );
};

export default Navbar;
