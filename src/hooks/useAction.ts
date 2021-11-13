import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

import * as actionCreators from "../state/actionCreators";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch);
};

