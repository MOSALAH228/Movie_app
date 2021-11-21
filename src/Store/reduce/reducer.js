const INITAL_STATE = {
  isLoading: false,
};

export default function Loader(state = INITAL_STATE, action) {
  switch (action.type) {
    case "SET_LOADER":
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
}
