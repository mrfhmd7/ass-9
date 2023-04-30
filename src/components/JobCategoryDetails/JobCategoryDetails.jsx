import React from "react";

const JobCategoryDetails = ({ job }) => {
  return (
    <div className="mt-5">
      <div className="w-[70px] h-[70px]">
        <img className="rounded w-full" src={job.logo} alt="" />
      </div>
      <h5 className="text-xl font-medium mb-3">{job.job}</h5>
      <p>{job.available}</p>
    </div>
  );
};

export default JobCategoryDetails;
