import { useEffect, useReducer } from "react";
import jobReducer from "../../reducers/jobReducer";
import Title from "./components/Title";
import JobForm from "./components/JobForm";
import SecondForm from "./components/SecondForm";
import { useAxios } from "../../hooks";
import axios from "../../services/jobs.service";
import { Loader } from "../../common/icons";
import { useNavigate, useParams } from "react-router-dom";

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
  const params = useParams();
  const navigate = useNavigate();

  const jobId = params.jobId;

  const updateProgressStep = (value) =>
    dispatch({ type: "UPDATE_FORM_STEP", payload: value });

  const updateFirstForm = (value) =>
    dispatch({ type: "UPDATE_FIRST_FORM", payload: value });

  const updateSecondForm = (value) =>
    dispatch({ type: "UPDATE_SECOND_FORM", payload: value });

  const getJob = async (id) => {
    await apiFunction({
      axiosInstance: axios,
      method: "Get",
      url: `/${id}`,
    });
  };
  const submitForm = async (data) => {
    await apiFunction({
      axiosInstance: axios,
      method: "POST",
      url: "/",
      requestConfig: {
        ...state.firstForm,
        ...data,
      },
    });

    navigate("/");
  };

  const updateForm = async (updateData) => {
    await await apiFunction({
      axiosInstance: axios,
      method: "PUT",
      url: `/${jobId}`,
      requestConfig: {
        ...updateData,
        ...state.firstForm,
      },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!jobId) return;

    getJob(jobId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobId]);

  return (
    <>
      {loading && (
        <div className="flex items-center justify-center h-full w-full">
          <Loader />
        </div>
      )}
      {!loading && error && <h2>Error occured please try again</h2>}
      {!loading && !error && (
        <div className="flex flex-col w-full py-4 px-8 gap-6 border border-solid border-gray-borderColor rounded-lg bg-white-100 max-w-[577px]  mx-auto">
          <Title step={state.step} />
          {state.step === 1 && (
            <JobForm
              updateProgressStep={updateProgressStep}
              updateFirstForm={updateFirstForm}
              initialValues={{
                jobTitle: data?.jobTitle,
                companyName: data?.companyName,
                industry: data?.industry,
                location: data?.location,
                remoteType: data?.remoteType,
              }}
            />
          )}
          {state.step === 2 && (
            <SecondForm
              updateSecondForm={updateSecondForm}
              submitForm={submitForm}
              initialValues={{
                experience: data?.experience,
                salary: data?.salary,
                totalEmployees: data?.totalEmployees,
                applyType: data?.applyType,
              }}
              isEdited={jobId ? true : false}
              updateForm={updateForm}
            />
          )}
        </div>
      )}
    </>
  );
};

CreateJob.propTypes = {};

export default CreateJob;
