import { useJobCardContext } from "../../../context/JobCardContext";

const JobCardSalary = () => {
  const { salary } = useJobCardContext();
  return (
    <p className="text-black-0 text-base">
      INR (₹) {salary.min} - {salary.max} / Month{" "}
    </p>
  );
};

export default JobCardSalary;
