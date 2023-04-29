import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { useJobCardContext } from "../../../context/JobCardContext";

import PropTypes from "prop-types";

const JobCardButton = ({ clickHandler }) => {
  const { applyType, id } = useJobCardContext();
  const navigate = useNavigate();
  const label = applyType === "externalApply" ? "External Apply" : "Apply Now";
  const border =
    applyType === "externalApply"
      ? " border border-solid border-blue-primary"
      : "border-none";
  const color =
    applyType === "externalApply" ? "text-blue-primary" : "text-white-100";
  const backgroundColor =
    applyType === "externalApply" ? "" : "bg-blue-primary";

  const handleDelete = () => {
    clickHandler(id);
  };
  const handleEdit = () => {
    navigate(`/edit-job/${id}`);
  };
  return (
    <div className="flex justify-between items-end w-full mt-4">
      <Button
        type="button"
        buttonText={label}
        border={border}
        color={color}
        backgroundColor={backgroundColor}
        padding="px-4 py-2"
      />
      <div className="flex justify-start items-center gap-3">
        <Button
          buttonText="Delete"
          backgroundColor="bg-red-error"
          color="text-white-100"
          padding="px-2 py-1"
          fontSize="text-sm font-xs"
          clickHandler={handleDelete}
        />
        <Button
          buttonText="Edit"
          backgroundColor="bg-blue-primary"
          color="text-white-100"
          padding="px-2 py-1"
          fontSize="text-sm font-light"
          clickHandler={handleEdit}
        />
      </div>
    </div>
  );
};

JobCardButton.propTypes = {
  clickHandler: PropTypes.func,
};
export default JobCardButton;
