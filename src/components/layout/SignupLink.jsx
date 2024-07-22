import { NavLink } from "react-router-dom";

const SignupLink = () => {
  return (
    <div>
      <ul className="flex items-center justify-center">
        <li className="p-2">
          <NavLink to="/signin" className="text-white  text-xl">
            Signin
          </NavLink>
        </li>
        <li className="p-2">
          <NavLink to="/signup" className="text-white  text-xl">
            Signup
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignupLink;
