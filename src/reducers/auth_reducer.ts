import { initialStateType } from "../contexts/auth_context";
import { LoginActionType } from "../utils/actions";

export type Action = {
  type: keyof LoginActionType;
  payload?: any;
};

const auth_reducer = (state: initialStateType, action: Action) => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, isLoading: true };
    case "LOGIN_SUCCESS":
      console.log(state);
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case "LOGIN_ERROR":
      console.log(state);
      return { ...state, isError: true };
    default:
      return state;
  }
};

export default auth_reducer;
