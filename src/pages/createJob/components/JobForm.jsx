import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import TextInput from "../../../components/TextInput";
import Button from "../../../components/Button";

const JobForm = ({ initialValues, updateProgressStep, updateFirstForm }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });
  const submitHandler = (data) => {
    updateFirstForm(data);
    updateProgressStep(2);
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col gap-6 items-start w-full"
    >
      <TextInput
        label="Job Title"
        placeholder="ex. UX UI Designer"
        fieldName="jobTitle"
        register={register}
        errors={errors}
        isRequired={true}
      />
      <TextInput
        label="Company Name"
        placeholder="ex. Google"
        fieldName="companyName"
        register={register}
        errors={errors}
        isRequired={true}
      />
      <TextInput
        label="Industry"
        placeholder="ex. Information Technology "
        fieldName="industry"
        register={register}
        errors={errors}
        isRequired={true}
      />
      <div className="flex flex-row items-center justify-start gap-6">
        <TextInput
          label="Location"
          placeholder="ex. Chennai"
          fieldName="location"
          register={register}
          errors={errors}
          isRequired={false}
        />
        <TextInput
          label="Remote Type"
          placeholder="ex. In-office"
          fieldName="remoteType"
          register={register}
          errors={errors}
          isRequired={false}
        />
      </div>
      <div className="flex items-end justify-end w-full mt-14">
        <Button
          buttonText="Next"
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

JobForm.propTypes = {
  initialValues: PropTypes.object,
  updateProgressStep: PropTypes.func,
  updateFirstForm: PropTypes.func,
};

export default JobForm;
