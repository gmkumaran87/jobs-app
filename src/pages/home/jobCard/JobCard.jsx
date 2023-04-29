import PropTypes from "prop-types";
import JobCardContext from "../../../context/JobCardContext";
import JobCardHeader from "./JobCardHeader";
import { Netflix } from "../../../common/icons";
import JobCardExperience from "./JobCardExperience";
import JobCardSalary from "./JobCardSalary";
import JobCardEmployees from "./JobCardEmployees";
import JobCardButton from "./JobCardButton";

const JobCard = ({
  width,
  job,
  cardHeader,
  experience,
  salary,
  actionBtn,
  totalEmployees,
}) => {
  let jobClass =
    "rounded-lg bg-white-100 px-6 py-4 border border-solid border-gray-borderColor flex flex-row gap-2 items-start justify-start text-black-0";

  if (width) jobClass += ` ${width}`;
  return (
    <JobCardContext.Provider value={{ ...job }}>
      <div className={jobClass}>
        <Netflix />
        <div className="flex flex-col items-start gap-2 w-full">
          {cardHeader}
          <p className="text-black-normal text-base font-normal">
            Part time (9.00 am to 5.00 pm IST)
          </p>
          {experience}
          {salary}
          {totalEmployees}
          {actionBtn}
        </div>
      </div>
    </JobCardContext.Provider>
  );
};

JobCard.Header = JobCardHeader;
JobCard.Experience = JobCardExperience;
JobCard.Salary = JobCardSalary;
JobCard.Employees = JobCardEmployees;
JobCard.Button = JobCardButton;

JobCard.propTypes = {
  job: PropTypes.object.isRequired,
  cardHeader: PropTypes.node,
  experience: PropTypes.node,
  salary: PropTypes.node,
  totalEmployees: PropTypes.node,
  actionBtn: PropTypes.node,
  width: PropTypes.string,
};

export default JobCard;
