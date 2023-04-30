import React from "react";

const Footer = () => {
  return (
    <div className="w-full p-4 bg-black text-white mt-32">
      {/* footer details container */}
      <div className="w-4/5 mx-auto m-6 grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
        {/* part 1 */}
        <div>
          <h2 className="text-2xl mb-4 font-semibold">Find-Jobs</h2>
          <p>
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
        </div>
        {/* company */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Company</h2>
          <p className="mb-1">About us</p>
          <p className="mb-1">Work</p>
          <p className="mb-1">Latest News</p>
          <p className="mb-1">Careers</p>
        </div>
        {/* product */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Product</h2>
          <p className="mb-1">Prototype</p>
          <p className="mb-1">Plans & Pricing</p>
          <p className="mb-1">Customers</p>
          <p className="mb-1">Integrations</p>
        </div>
        {/* support */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Support</h2>
          <p className="mb-1">Help Desk</p>
          <p className="mb-1">Sales</p>
          <p className="mb-1">Become a partner</p>
          <p className="mb-1">Developers</p>
        </div>
        {/* contact */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <p className="mb-1">524 Broadway , NYC</p>
          <p className="mb-1">+1 777 - 978 - 5570</p>
        </div>
      </div>
      <hr />
      <div className="w-4/5 mx-auto flex justify-between">
        <p>
          <small>@2023 CareerHub. All Rights Reserved</small>
        </p>
        <p>
          <small>Powered by CareerHub</small>
        </p>
      </div>
    </div>
  );
};

export default Footer;
