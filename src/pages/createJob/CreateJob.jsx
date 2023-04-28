import { useEffect, useReducer } from "react";
// import PropTypes from "prop-types";
import jobReducer from "../../reducers/jobReducer";
import Title from "./components/Title";
import JobForm from "./components/JobForm";
import SecondForm from "./components/SecondForm";
import { useAxios } from "../../hooks";
import axios from "../../services/jobs.service";
import { Loader } from "../../common/icons";
import { useNavigate } from "react-router-dom";

const initialState = {
  step: 1,
  firstForm: {
    jobTitle: "",
    companyName: "",
    industry: "",
    location: "",
    remoteType: "",
  },
  secondForm: {
    experience: {
      min: 0,
      max: 20,
    },
    salary: {
      min: 0,
      max: 20000,
    },
    totalEmployees: 0,
    applyType: "",
  },
};

const CreateJob = () => {
  const [state, dispatch] = useReducer(jobReducer, initialState);
  const [data, error, loading, apiFunction] = useAxios();
  const navigate = useNavigate();

  const updateProgressStep = (value) =>
    dispatch({ type: "UPDATE_FORM_STEP", payload: value });

  const updateFirstForm = (value) =>
    dispatch({ type: "UPDATE_FIRST_FORM", payload: value });

  const updateSecondForm = (value) =>
    dispatch({ type: "UPDATE_SECOND_FORM", payload: value });

  const submitForm = (data) => {
    // console.log("FOrm state", state);
    apiFunction({
      axiosInstance: axios,
      method: "POST",
      url: "/",
      requestConfig: {
        ...state.firstForm,
        ...data,
      },
    });
  };

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data, navigate]);
  console.log("Create JOB", { data, error, loading });
  return (
    <>
      {loading && <Loader />}
      {!loading && error && <h2>Error occured please try again</h2>}
      {!loading && !error && data === undefined && (
        <div className="flex flex-col w-full py-4 px-8 gap-6 border border-solid border-gray-borderColor rounded-lg bg-white-100 max-w-[577px]  mx-auto">
          <Title step={state.step} />
          {state.step === 1 && (
            <JobForm
              updateProgressStep={updateProgressStep}
              updateFirstForm={updateFirstForm}
            />
          )}
          {state.step === 2 && (
            <SecondForm
              updateSecondForm={updateSecondForm}
              submitForm={submitForm}
            />
          )}
        </div>
      )}
    </>
  );
};

CreateJob.propTypes = {};

export default CreateJob;
