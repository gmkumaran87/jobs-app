const jobValidations = {
  jobTitle: {
    required: {
      value: true,
      message: "Please enter Job Title",
    },
  },
  companyName: {
    required: {
      value: true,
      message: "Please enter Company Name",
    },
  },
  industry: {
    required: {
      value: true,
      message: "Please enter Industry",
    },
  },
};

export default jobValidations;
