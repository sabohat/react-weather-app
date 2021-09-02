import keys from "../../API_KEYS";
import axios from "axios";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE":
      console.log(state, "STATE")
      console.log(action.payload.name)
      state.name = action.payload.name
      return state

    case "WITHDRAW":
      return state - action.payload;
    // if dispatch action does not match any
    default:
      return state;
  }
};

export default reducer;
