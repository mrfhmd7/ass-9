import React from "react";
import User from "../User/User";
import JobCategory from "../JobCategory/JobCategory";
import { useLoaderData } from "react-router-dom";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  const jobs = useLoaderData();

  return (
    <div>
      <User></User>
      <JobCategory jobs={jobs}></JobCategory>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
