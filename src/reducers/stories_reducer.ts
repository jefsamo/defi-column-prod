import {
  GET_SINGLE_STORY_BEGIN,
  ActionType,
  GET_STORIES_BEGIN,
  GET_SINGLE_STORY_SUCCCESS,
  GET_STORIES_ERROR,
  GET_STORIES_SUCCESS,
  GET_SINGLE_STORY_ERROR,
} from "../utils/actions";

import { initialStateType } from "../contexts/stories_context";
import { storyDataType } from "../utils/storyData";

type Action = {
  type: keyof ActionType;
  payload?: any;
};

const stories_reducer = (state: initialStateType, action: Action) => {
  switch (action.type) {
    case GET_STORIES_BEGIN:
      return { ...state, storiesLoading: true };
    case GET_STORIES_SUCCESS:
      const allStories = action.payload;
      return { ...state, storiesLoading: false, allStories };
    case GET_STORIES_ERROR:
      return { ...state, storiesLoading: false, storiesError: true };
    case GET_SINGLE_STORY_BEGIN:
      return {
        ...state,
        singleStoryLoading: true,
      };
    case GET_SINGLE_STORY_SUCCCESS:
      return {
        ...state,
        singleStoryLoading: false,
        singleStory: action.payload,
      };
    case GET_SINGLE_STORY_ERROR:
      return {
        ...state,
        singleStoryLoading: false,
        singleStoryError: true,
      };
    default:
      return state;
  }
};

export default stories_reducer;
