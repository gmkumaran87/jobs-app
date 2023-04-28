// import React from "react";
import PropTypes from "prop-types";

const Title = ({ step }) => {
  return (
    <div className="flex justify-between items-center text-sm md:text-base font-normal">
      <h2 className="text-sm md:text-xl">Create a job</h2>
      <p className="font-medium">Step {step}</p>
    </div>
  );
};

Title.propTypes = {
  step: PropTypes.number,
};

export default Title;
