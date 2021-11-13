import { Action } from "./actions";
import { ActionTypes } from "./actionTypes";

interface RepositoryState {
  loading: boolean;
  data: string[];
  error: string | null;
}

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const repositoryReducer = (
  state: RepositoryState = initialState,
  action: Action
): RepositoryState => {
  switch (action.type) {
    case ActionTypes.SEARCH_REPOSITORY:
      return { loading: true, data: [], error: null };
    case ActionTypes.SEARCH_REPOSITORY_SUCCESS:
      return { loading: false, data: action.payload, error: null };
    case ActionTypes.SEARCH_REPOSITORY_ERROR:
      return { loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

export default repositoryReducer;
