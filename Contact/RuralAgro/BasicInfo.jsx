// Change info and styling as necessary.

import React from "react";
const BasicInfo = () => {
  return (
    <>
      {/* Basic Contact Info Section */}
      <div className="flex justify-around mb-8 pt-5 md:pt-16  p-2 md:p-8">
        <div className="text-center bg-slate-100 p-2 md:p-5 rounded-lg">
          <h2 className="text-lg md:text-2xl font-semibold py-2 md:py-3 text-amber-600">
            Our Address
          </h2>
          <div className="text-sm md:text-base font-medium text-green-600">
            <p>RuralAgro Commerce</p>
            <p>123 Rural Lane</p>
            <p>Kawran Bazar, Dhaka-1215.</p>
          </div>
        </div>
        <div className="text-center bg-slate-100 p-2 md:p-5 rounded-lg">
          <h2 className="text-lg md:text-2xl font-semibold py-2 md:py-3 text-amber-600">
            Phone
          </h2>
          <p className="text-sm md:text-base font-medium text-green-600">
            Call us at: 123 456-7890
          </p>
        </div>
        <div className="text-center bg-slate-100 p-2 md:p-5  rounded-lg">
          <h2 className="text-lg md:text-2xl font-semibold py-2 md:py-3 text-amber-600">
            Email
          </h2>
          <div className="text-sm md:text-base font-medium  text-green-600">
            <p>For Queries: info@ruralagro.com</p>
            <p>For Support: support24@ruralagro.com</p>
          </div>
        </div>
      </div>

      <div className="text-center mb-8 bg-slate-100 p-4 md:p-7 rounded-lg">
        <h2 className="text-lg md:text-2xl font-semibold py-2 md:py-3 text-amber-600">
          Customer Support Hours
        </h2>
        <div className="text-sm md:text-base font-medium text-green-600">
          <p>Saturday to Thursday: 24 Hours</p>
          <p>Friday: Closed</p>
        </div>
      </div>
    </>
  );
};

export default BasicInfo;
