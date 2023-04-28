import PropTypes from "prop-types";
import jobValidations from "../validations/jobValidations";

const TextInput = ({
  label,
  fieldName,
  placeholder,
  register,
  errors,
  isRequired,
}) => {
  let labelClass = "text-sm font-medium";

  if (isRequired) {
    labelClass += " after:content-['*'] after:ml-0.5 after:text-red-500";
  }
  return (
    <div className="flex flex-col items-start gap-1 w-full">
      <label className={labelClass}>{label}</label>
      <input
        className="border border-solid border-gray-borderColor p-2 rounded-lg text-sm w-full"
        type="text"
        placeholder={placeholder}
        name={fieldName}
        {...register(fieldName, jobValidations[fieldName])}
      />
      {errors[fieldName]?.type === "required" && (
        <p className="text-red-error text-xs" role="alert">
          First name is required
        </p>
      )}
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  fieldName: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  errors: PropTypes.object,
  isRequired: PropTypes.bool,
};

export default TextInput;
