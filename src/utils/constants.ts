import { LoginActionType, StoryActionType } from "./actions";
import { storyDataType } from "./storyData";

export const baseUrl = `http://localhost:3000`;

export type Story = {
  story: storyDataType;
};

export type StoryAction = {
  type: keyof StoryActionType;
  payload?: any;
};
export type lOGINAction = {
  type: keyof LoginActionType;
  payload?: any;
};
