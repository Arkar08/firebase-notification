import { Link, NavLink } from "react-router-dom";

const SignoutLink = () => {
  return (
    <div>
      <ul className="flex items-center justify-center">
        <li className="p-2 mr-2">
          <NavLink to="/create" className="text-white  text-xl">
            New Project
          </NavLink>
        </li>
        <li className="p-2 mr-2">
          <Link to="/" className="text-white  text-xl">
            Log out
          </Link>
        </li>
        <li className="bg-red-500 w-[50px] h-[50px] rounded-full flex items-center justify-center">
          <Link to="/" className="text-white text-xl">
            UU
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SignoutLink;
