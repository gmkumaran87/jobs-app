import { useJobCardContext } from "../../../context/JobCardContext";

const JobCardExperience = () => {
  const { experience } = useJobCardContext();
  console.log("JobCardHeader", experience);

  return (
    <p className="text-black-0 text-base">
      Experience ({experience.min} - {experience.max} years)
    </p>
  );
};

export default JobCardExperience;
