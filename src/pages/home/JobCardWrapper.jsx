import PropTypes from "prop-types";
import JobCard from "./jobCard/JobCard";

const JobCardWrapper = ({ job, clickHandler }) => {
  return (
    <JobCard
      width="min-w-[830px]"
      job={job}
      cardHeader={<JobCard.Header />}
      experience={
        job?.experience.min !== "" ? <JobCard.Experience /> : undefined
      }
      salary={<JobCard.Salary />}
      totalEmployees={job?.totalEmployees ? <JobCard.Employees /> : undefined}
      actionBtn={<JobCard.Button clickHandler={clickHandler} />}
    />
  );
};

JobCardWrapper.propTypes = {
  job: PropTypes.object.isRequired,
  clickHandler: PropTypes.func,
};

export default JobCardWrapper;
