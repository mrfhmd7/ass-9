import React from "react";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  return (
    <div className="md:flex justify-between items-center w-4/5 mx-auto mt-10">
      <h4 className="text-3xl font-semibold">Find-Jobs</h4>
      <nav className="flex gap-6 mt-4 md:mt-0">
        <ActiveLink to="/">Home</ActiveLink>
        <ActiveLink to="/statistics">Statistics</ActiveLink>
        <ActiveLink to="/jobs">Applied Jobs</ActiveLink>
        <ActiveLink to="/blog">Blog</ActiveLink>
      </nav>
      <button className="p-4 bg-[#7E90FE] text-white font-semibold rounded-md mt-4 md:mt-0">
        Start Applying
      </button>
    </div>
  );
};

export default Header;
