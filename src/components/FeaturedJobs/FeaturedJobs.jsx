import React, { useContext, useState } from "react";
import { JobsContext } from "../Layout/Layout";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
  // step 3 receive data by using useContext
  //   received data form context by destructuring
  const [jobs, handleShowAllJobs, handleShowLess] = useContext(JobsContext);

  let isMore;
  if (jobs.length > 4) {
    isMore = true;
  } else {
    isMore = false;
  }

  return (
    <div className="w-4/5 mx-auto mt-20 md:mt-40 mb-8">
      <h2 className="text-4xl font-bold text-center">Featured Jobs</h2>
      <p className="text-center mt-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      {/* featured job info */}
      <div className="md:grid grid-cols-2 gap-16 mt-12 w-11/12 mx-auto">
        {jobs.map((job) => (
          <FeaturedJob key={job.id} job={job}></FeaturedJob>
        ))}
      </div>

      {/* button container */}
      <div className="flex flex-col w-4/6 md:w-1/6 mx-auto">
        {/* show all button */}
        <button
          onClick={handleShowAllJobs}
          //   we have conditional css rendering here
          className={`py-2 px-4 bg-[#7E90FE] text-white font-semibold rounded-md mt-4 md:mt-7 ${
            isMore ? "hidden" : "block"
          }`}>
          See All Jobs
        </button>
        {/* show less button */}
        <button
          onClick={handleShowLess}
          //   conditional css rendering here
          className={`py-2 px-4 bg-[#7E90FE] text-white font-semibold rounded-md mt-4 md:mt-7 ${
            isMore ? "block" : "hidden"
          }`}>
          Show Less Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
