import { useJobCardContext } from "../../../context/JobCardContext";

const JobCardEmployees = () => {
  const { totalEmployees } = useJobCardContext();
  return <p className="text-black-0 text-base">{totalEmployees} employees</p>;
};

export default JobCardEmployees;
