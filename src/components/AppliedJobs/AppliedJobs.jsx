import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../FakeDB/FakeDb";
import { useLoaderData } from "react-router-dom";
import AppliedJobsDetails from "../AppliedJobsDetails/AppliedJobsDetails";

const AppliedJobs = () => {
  // received data via loader from json file
  const featuredJobs = useLoaderData();
  // retrieve data from local storage
  const savedJobs = getShoppingCart();

  // creating a list of applied jobs
  let matchedJobs = [];
  for (const id in savedJobs) {
    let foundJobs = featuredJobs.find((job) => job.id == id);
    matchedJobs.push(foundJobs);
  }

  return (
    <div className="w-4/5 mx-auto mt-11 md:mt-28">
      <h2 className="text-4xl text-center font-bold">
        Applied Jobs : {matchedJobs.length}
      </h2>

      {/* applied jobs details */}
      <div className=" mt-12 md:mt-36">
        {matchedJobs.map((job) => (
          <AppliedJobsDetails key={job.id} job={job}></AppliedJobsDetails>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
