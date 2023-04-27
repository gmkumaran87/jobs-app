import { useEffect } from "react";
import { useAxios } from "../hooks";
import axios from "../services/jobs.service";
import { Loader } from "../common/icons";
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

  console.log("Data", data);
  return (
    <div className="flex flex-col gap-4 grow min-h-full p-4">
      <h2 className="text-2xl font-medium">All jobs</h2>
      <div className="flex justify-center items-center grow ">
        {loading && <Loader />}
        {!loading && error && <p className="text-base">{error}</p>}
        {!loading && !error && !data && <p>No posts to display</p>}
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
