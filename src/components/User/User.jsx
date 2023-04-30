import React from "react";

const User = () => {
  return (
    <div className="md:flex gap-5 w-4/5 mx-auto mt-10 md:mt-20">
      <div>
        <h3 className="text-6xl font-bold">
          One Step
          <br /> Closer To Your
          <br />
          <span className="text-[#7E90FE]">Dream Job</span>
        </h3>
        <p className="mt-6">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="p-4 bg-[#7E90FE] text-white font-semibold rounded-md mt-8">
          Get Started
        </button>
      </div>
      <div className="mt-5 md:mt-0">
        <img
          src="https://imgdb.net/storage/uploads/1c745d5dd67771ef57a63c2890a0bd03b150e417e663d4efb8bd34ed529f3f96.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default User;
