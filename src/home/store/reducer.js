import * as constants from "./constants";

import { fromJS } from "immutable";

const defaultState = fromJS({
  light:true,
});

export default (state = defaultState, action) => {
    switch (action.type) {
      case constants.LIGHT_ON:
        return state.set("focused", true);
      case constants.LIGHT_OFF:
        return state.set("focused", false);
      
      default:
        return state;
    }
  };