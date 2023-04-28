const jobReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FORM_STEP": {
      return {
        ...state,
        step: action.payload,
      };
    }
    case "UPDATE_FIRST_FORM": {
      return {
        ...state,
        firstForm: {
          ...state.firstForm,
          ...action.payload,
        },
      };
    }
    case "UPDATE_SECOND_FORM": {
      console.log("Second form updated", action.payload);
      return {
        ...state,
        secondForm: {
          ...state.secondForm,
          ...action.payload,
        },
      };
    }
    default:
      throw new Error("Unknown action");
  }
};

export default jobReducer;
