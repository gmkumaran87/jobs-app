import { useState, useEffect } from "react";

useEffect;
const useAxios = () => {
  const [response, setResponse] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [controller, setController] = useState();

  const apiFunction = async (configObj) => {
    const { axiosInstance, method, url, requestConfig = {} } = configObj;

    try {
      setLoading(true);
      const ctrl = new AbortController();
      setController(ctrl);

      const res = await axiosInstance[method.toLowerCase()](url, {
        ...requestConfig,
        signal: ctrl.signal,
      });
      console.log("Result", res);
      if (res?.status === 201 || res?.status === 200) {
        setResponse(res.data);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("ctrl", controller);

    return () => controller && controller.abort();
  }, [controller]);
  return [response, error, loading, apiFunction];
};

export default useAxios;
