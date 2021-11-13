import { combineReducers } from "redux";
import repositoryReducer from "./respositoryReducer";

export const reducer = combineReducers({
  repository: repositoryReducer,
});

export type RootState = ReturnType<typeof reducer>;
