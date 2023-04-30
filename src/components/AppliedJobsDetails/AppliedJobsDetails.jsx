import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AppliedJobsDetails = ({ job }) => {
  return (
    <div className="md:flex justify-between items-center border-gray-200 border-2 rounded-md mb-7 p-8">
      {/* image part */}
      <div className=" w-[240px] ">
        <img className="rounded mb-3 md:mb-0" src={job.img} alt="" />
      </div>
      {/* job details part */}
      <div>
        <h4 className="text-xl font-medium mb-2">{job.title}</h4>
        <p className="text-lg font-normal">{job.company}</p>

        {/* job type buttons */}
        <div className="mb-2">
          <button className="border-2 border-[#7E90FE] py-1 px-3 rounded mt-2 text-[#7E90FE]">
            {job.jobtype1}
          </button>
          <button className="border-2 border-[#7E90FE] py-1 px-3 rounded mt-2 text-[#7E90FE] ml-3">
            {job.jobtype2}
          </button>
        </div>
        <p className="md:mb-0 mb-2 md:mt-3">
          <FontAwesomeIcon icon={faLocationDot} />{" "}
          <span className="mr-3">{job.location}</span>
          <FontAwesomeIcon icon={faDollarSign} />
          <span>{job.salary}</span>
        </p>
      </div>

      {/* this link is used to go to the job detail path */}
      <Link to={`/details/${job.id}`}>
        <button className="py-2 px-4 bg-[#7E90FE] text-white font-semibold rounded-md md:mt-0 mt-2">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default AppliedJobsDetails;
