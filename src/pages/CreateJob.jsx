import React, { useState, useReducer } from "react";
import PropTypes from "prop-types";
import jobReducer from "../reducers/jobReducer";

const initialState = {
  step: 1,
  formValues: {
    jobTitle: "",
    companyName: "",
    industry: "",
    location: "",
    remoteType: "",
    experience: 0,
    salary: 0,
    totalEmployees: 0,
    applyType: "",
  },
};
const CreateJob = (props) => {
  const [state, dispatch] = useReducer(jobReducer, initialState);
  return (
    <div className="flex flex-col w-full p-4 border border-solid border-gray-borderColor rounded-lg bg-white-100 max-w-[577px] max-h-[564px] mx-auto">
      <div className="flex justify-between items-center text-sm md:text-base font-normal">
        <h2 className="text-sm md:text-xl">Create a job</h2>
        <p className="font-medium">Step 1</p>
      </div>
    </div>
  );
};

CreateJob.propTypes = {};

export default CreateJob;
