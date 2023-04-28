import { useForm } from "react-hook-form";
import TextInput from "../../../components/TextInput";
import Button from "../../../components/Button";

import PropTypes from "prop-types";

const RadioButton = ({ children, fieldName, value, register }) => {
  return (
    <div className="flex gap-2">
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
const SecondForm = ({ initialValues, updateSecondForm, submitForm }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });
  const submitHandler = (data) => {
    updateSecondForm(data);

    submitForm(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col gap-6 items-start w-full"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-base font-medium">Experience</h2>
        <div className="flex items-center gap-6">
          <TextInput
            label=""
            placeholder="Minimum"
            fieldName="experience.min"
            register={register}
            errors={errors}
          />
          <TextInput
            label=""
            placeholder="Maximum"
            fieldName="experience.max"
            register={register}
            errors={errors}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-base font-medium">Salary</h2>
        <div className="flex items-center gap-6">
          <TextInput
            label=""
            placeholder="ex. Minimum"
            fieldName="salary.min"
            register={register}
            errors={errors}
          />
          <TextInput
            label=""
            placeholder="ex. Maximum"
            fieldName="salary.max"
            register={register}
            errors={errors}
          />
        </div>
      </div>
      <TextInput
        label="Total Employee"
        placeholder="ex-100"
        fieldName="totalEmployees"
        register={register}
        errors={errors}
        isRequired={false}
      />
      <div className="flex flex-col items-start  gap-3">
        <p className="font-medium text-sm text-black-80">Apply type</p>
        <div className="flex flex-row gap-4 items-center">
          <RadioButton
            register={register}
            name="applyType"
            value="quickApply"
            id="quickApply"
          >
            Quick apply
          </RadioButton>
          <RadioButton
            register={register}
            name="applyType"
            value="externalApply"
            id="externalApply"
          >
            External apply
          </RadioButton>
        </div>
      </div>
      <div className="flex items-end justify-end w-full mt-14">
        <Button
          buttonText="Save"
          backgroundColor="bg-blue-primary"
          color="text-white-100"
          height="h-[40px]"
          width="w-[70px]"
          type="submit"
          // clickHandler={handleClick}
        />
      </div>
    </form>
  );
};

SecondForm.propTypes = {
  initialValues: PropTypes.object,
  updateSecondForm: PropTypes.func,
  submitForm: PropTypes.func,
};

export default SecondForm;
