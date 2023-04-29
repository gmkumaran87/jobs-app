import { useForm } from "react-hook-form";
import TextInput from "../../../components/TextInput";
import Button from "../../../components/Button";
import PropTypes from "prop-types";
import RadioButton from "../../../components/RadioButton";

const SecondForm = ({
  initialValues,
  updateSecondForm,
  submitForm,
  updateForm,
  isEdited,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });
  const submitHandler = (values) => {
    console.log("Before submit second form", values);
    updateSecondForm(values);

    if (isEdited) {
      console.log("Updating form", values);
      updateForm(values);
    } else {
      submitForm(values);
    }
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
            type="number"
            placeholder="Minimum"
            fieldName="experience.min"
            register={register}
            errors={errors}
          />
          <TextInput
            type="number"
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
            type="number"
            placeholder="ex. Minimum"
            fieldName="salary.min"
            register={register}
            errors={errors}
          />
          <TextInput
            type="number"
            label=""
            placeholder="ex. Maximum"
            fieldName="salary.max"
            register={register}
            errors={errors}
          />
        </div>
      </div>
      <TextInput
        type="number"
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
          buttonText={isEdited ? "Update" : "Save"}
          height="h-[40px]"
          width="w-[70px]"
          type="submit"
        />
      </div>
    </form>
  );
};

SecondForm.propTypes = {
  initialValues: PropTypes.object,
  updateSecondForm: PropTypes.func,
  submitForm: PropTypes.func,
  isEdited: PropTypes.bool,
  updateForm: PropTypes.func,
};

export default SecondForm;
