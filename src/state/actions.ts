import { ActionTypes } from "./actionTypes";

interface SearchRepositorySuccessAction {
  type: ActionTypes.SEARCH_REPOSITORY_SUCCESS;
  payload: string[];
}
interface SearchRepository {
  type: ActionTypes.SEARCH_REPOSITORY;
}
interface SearchRepositoryErrorAction {
  type: ActionTypes.SEARCH_REPOSITORY_ERROR;
  payload: string;
}

export type Action =
  | SearchRepository
  | SearchRepositoryErrorAction
  | SearchRepositorySuccessAction;
