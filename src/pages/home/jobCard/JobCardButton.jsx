import Button from "../../../components/Button";
import { useJobCardContext } from "../../../context/JobCardContext";

const JobCardButton = () => {
  const { applyType } = useJobCardContext();
  const label = applyType === "externalApply" ? "External Apply" : "Apply Now";
  const border =
    applyType === "externalApply"
      ? " border border-solid border-blue-primary"
      : "border-none";
  const color =
    applyType === "externalApply" ? "text-blue-primary" : "text-white-100";
  const backgroundColor =
    applyType === "externalApply" ? "" : "bg-blue-primary";
  return (
    <div>
      <Button
        type="button"
        buttonText={label}
        border={border}
        color={color}
        backgroundColor={backgroundColor}
        padding="px-4 py-2"
        margin="mt-4"
      />
    </div>
  );
};

export default JobCardButton;
