import { createContext, useContext } from "react";

const JobCardContext = createContext(null);

export function useJobCardContext() {
  const context = useContext(JobCardContext);
  if (!context) {
    throw new Error(
      "JobCard.* component must be rendered as child of JobCard component"
    );
  }
  return context;
}

export default JobCardContext;
