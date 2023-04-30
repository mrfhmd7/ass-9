import React from "react";

import JobCategoryDetails from "../JobCategoryDetails/JobCategoryDetails";

const JobCategory = ({ jobs }) => {
  return (
    <div className="w-4/5 mx-auto mt-20 md:mt-32">
      {/* job category heading and description */}
      <div className="text-center mtt-10">
        <h4 className="text-4xl font-bold">Job Category List</h4>
        <p className="mt-5">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      {/* available jobs */}
      <div className="md:flex justify-between mt-10 content-center">
        {jobs.map((job) => (
          <JobCategoryDetails key={job.id} job={job}></JobCategoryDetails>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
