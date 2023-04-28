import PropTypes from "prop-types";
import JobCard from "./jobCard/JobCard";

const JobCardWrapper = ({ job }) => {
  console.log("JobCardWrapper", JobCard.Header);
  return (
    <JobCard
      job={job}
      cardHeader={<JobCard.Header />}
      experience={<JobCard.Experience />}
      salary={<JobCard.Salary />}
      totalEmployees={<JobCard.Employees />}
      actionBtn={<JobCard.Button />}
    />
  );
};

JobCardWrapper.propTypes = {
  job: PropTypes.object.isRequired,
};

export default JobCardWrapper;
