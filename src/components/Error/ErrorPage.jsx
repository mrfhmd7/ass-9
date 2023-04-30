import React from "react";

const ErrorPage = () => {
  return (
    <div className="w-4/5 mx-auto text-center mt-32 flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p>Sorry,an unexpected error has occured</p>
      <h1 className="text-2xl font-bold ">404</h1>
      <p> page Not found</p>
    </div>
  );
};

export default ErrorPage;
