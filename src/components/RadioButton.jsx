import PropTypes from "prop-types";

const RadioButton = ({ children, fieldName, value, register }) => {
  return (
    <div className="flex gap-2 items-end">
      <label
        htmlFor={fieldName}
        className="checkbox-input flex flex-row gap-2 self-baseline font-normal text-sm"
      >
        <input
          type="radio"
          className="h-5 w-5 rounded-md border-2 border-greyCheckBox text-indigo-600 focus:ring-indigo-600"
          name={fieldName}
          value={value}
          {...register("applyType")}
        />
        {children}
      </label>
    </div>
  );
};
RadioButton.propTypes = {
  children: PropTypes.elementType,
  value: PropTypes.string,
  fieldName: PropTypes.string,
  register: PropTypes.func,
};

export default RadioButton;
