import { useEffect } from "react";
import { useAxios } from "../../hooks";
import axios from "../../services/jobs.service";
import { Loader } from "../../common/icons";
import JobCardWrapper from "./JobCardWrapper";
// import PropTypes from "prop-types";

const Home = () => {
  const [data, error, loading, apiFunction] = useAxios();

  const getJobs = () => {
    apiFunction({
      axiosInstance: axios,
      method: "Get",
      url: "/",
    });
  };
  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("Data in Dashboard", data);
  return (
    <div className="flex flex-col gap-4 grow min-h-full p-4">
      <h2 className="text-2xl font-medium">All jobs</h2>
      <div className="flex justify-start items-start grow ">
        {loading && <Loader />}
        {!loading && error && <p className="text-base">{error}</p>}
        {!loading && !error && data?.length === 0 && <p>No posts to display</p>}
        {!loading && !error && data?.length > 0 && (
          <div className="flex items-start gap-5">
            {data.map((job) => (
              <JobCardWrapper job={job} key={job.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
