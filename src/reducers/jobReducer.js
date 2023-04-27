const jobReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FORM_STEP": {
      return {
        ...state,
        step: action.payload,
      };
    }
    default:
      throw new Error("Unknown action");
  }
};

export default jobReducer;
