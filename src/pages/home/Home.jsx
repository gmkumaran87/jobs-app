import { useEffect } from "react";
import { useAxios } from "../../hooks";
import axios from "../../services/jobs.service";
import { Loader } from "../../common/icons";
import JobCardWrapper from "./JobCardWrapper";

const Home = () => {
  /* Using useAxios custom hook for API requests instead of simple axios in separate file
     helps the component lean and slick and clears the overhead of useState() and useEffect() functions.
  */
  const [data, error, loading, apiFunction] = useAxios();

  const getJobs = async () => {
    await apiFunction({
      axiosInstance: axios,
      method: "Get",
      url: "/",
    });
  };
  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteJob = async (id) => {
    await apiFunction({
      axiosInstance: axios,
      method: "DELETE",
      url: `/${id}`,
    });

    // Get latest data
    getJobs();
  };

  const clickHandler = (id) => {
    deleteJob(id);
  };

  return (
    <div className="flex flex-col gap-4 grow min-h-full w-full p-4">
      <h2 className="text-2xl font-medium">All jobs</h2>
      <div className="flex justify-start items-start grow ">
        {loading && (
          <div className="flex items-start justify-center w-full h-full">
            <Loader />
          </div>
        )}
        {!loading && error && <p className="text-base">{error}</p>}
        {!loading && !error && data?.length === 0 && <p>No posts to display</p>}
        {!loading && !error && data?.length > 0 && (
          <div className="flex flex-wrap items-start gap-5">
            {data.map((job) => (
              <JobCardWrapper
                job={job}
                key={job.id}
                clickHandler={clickHandler}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
