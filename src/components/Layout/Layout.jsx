import React, { createContext, useEffect, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// step1 create and export the context
export const JobsContext = createContext();

const Layout = () => {
  const jobs = useLoaderData();
  const savedJobs = [...jobs];
  const reducedJobs = jobs.slice(0, 4);

  const [renderJobs, setRenderJobs] = useState(reducedJobs);

  const handleShowLess = () => {
    const reducedJobs = renderJobs.slice(0, 4);
    setRenderJobs(reducedJobs);
  };

  const handleShowAllJobs = () => {
    const allJobs = [...savedJobs];
    setRenderJobs(allJobs);
  };

  return (
    <div>
      {/* step 2 set context provider */}
      {/* send data in an array */}
      <JobsContext.Provider
        value={[renderJobs, handleShowAllJobs, handleShowLess]}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </JobsContext.Provider>
    </div>
  );
};

export default Layout;
