import axios from "axios";
import { Dispatch } from "redux";

import { Action } from "./actions";
import { ActionTypes } from "./actionTypes";

export const searchRepository = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.SEARCH_REPOSITORY,
    });
    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );
      const names = data.objects.map((result:any) => {
        return result.package.name;
      });
      dispatch({
        type: ActionTypes.SEARCH_REPOSITORY_SUCCESS,
        payload: names,
      });
    } catch (err: any) {
      dispatch({
        type: ActionTypes.SEARCH_REPOSITORY_ERROR,
        payload: err.message,
      });
    }
  };
};
