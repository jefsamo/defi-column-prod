import { storyDataType } from "../utils/storyData";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import reducer from "../reducers/stories_reducer";
import axios from "axios";
import { baseUrl } from "../utils/constants";

export type initialStateType = {
  allStories: storyDataType[] | [];
  storiesLoading: boolean;
  storiesError: boolean;
  singleStory: storyDataType | {};
  fetchSingleStory: (id: string) => void;
  singleStoryLoading: boolean;
  singleProductError: boolean;
};

const initialState: initialStateType = {
  allStories: [],
  storiesLoading: false,
  storiesError: false,
  singleStory: {},
  fetchSingleStory: (id: string) => {},
  singleStoryLoading: false,
  singleProductError: false,
};

const StoriesContext = createContext<initialStateType>(initialState);

interface Props {
  children: ReactNode;
}

export const StoriesContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const getStories = async () => {
      dispatch({ type: "GET_STORIES_BEGIN" });
      try {
        const res = await axios.get(`${baseUrl}/api/v1/stories`);
        // console.log(res);
        const result = res.data.data.stories;
        console.log(result);
        dispatch({ type: "GET_STORIES_SUCCESS", payload: result });
      } catch (error) {
        console.log(error);
        dispatch({ type: "GET_STORIES_ERROR" });
      }
    };

    getStories();
  }, []);

  return (
    <StoriesContext.Provider value={{ ...state }}>
      {children}
    </StoriesContext.Provider>
  );
};

export const useStoriesContext = () => {
  return useContext(StoriesContext);
};
