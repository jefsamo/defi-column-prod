import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import auth_reducer from "../reducers/auth_reducer";
import { baseUrl } from "../utils/constants";
import { toast } from "react-hot-toast";

interface Props {
  children: ReactNode;
}

export type initialStateType = {
  user: string | null;
  isLoading: boolean;
  isError: boolean;
  login(email: string, password: string): void;
};

const initialState: initialStateType = {
  user: null,
  isLoading: false,
  isError: false,
  login: (email: string, password: string) => {},
};

const AuthContext = createContext<initialStateType>(initialState);

export const AuthContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(auth_reducer, initialState);

  const login = async (email: string, password: string) => {
    try {
      dispatch({ type: "LOGIN_START" });
      const res = await axios.post(`${baseUrl}/api/v1/users/login`, {
        email,
        password,
      });
      if (res.data.status === "success") {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.data.user });
        localStorage.setItem("user", JSON.stringify(res.data.data.user));
        console.log(res.data.data.user);
      }
    } catch (error: any) {
      dispatch({ type: "LOGIN_ERROR" });
      toast.error(error.data.message);
      console.log(error.response);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")!);

    if (user) {
      dispatch({ type: "LOGIN_SUCCESS", payload: user });
    }
  }, []);
  return (
    <AuthContext.Provider value={{ ...state, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
