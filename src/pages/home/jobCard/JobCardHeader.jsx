import { useJobCardContext } from "../../../context/JobCardContext";

const JobCardHeader = () => {
  const { jobTitle, companyName, industry, location, remoteType } =
    useJobCardContext();

  const remote = remoteType ? `(${remoteType})` : null;
  return (
    <div className="flex flex-col justify-start items-start gap-0">
      <h1 className="text-black-0 font-normal text-2xl">{jobTitle}</h1>
      <div className="flex items-center text-black-0">
        <h3>{companyName} - </h3>
        <h3>{industry}</h3>
      </div>
      <p className="text-gray-para text-base font-normal">
        {location} {remote}
      </p>
    </div>
  );
};

export default JobCardHeader;
