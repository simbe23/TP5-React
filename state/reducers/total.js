
import {
  ADD_TOTAL,
  REMOVE_TOTAL,
} from '../actionTypes';

import { total as totalInitialState } from '../initialState';

const totalReducer = (state = totalInitialState, action) => {
  const { totales } = state;
  const { total } = action;
  console.log(total);

  switch (action.type){
      case ADD_TOTAL:
          newItems = [
            ...items,
            0,
          ];
        return {
          ...state,
          items: newItems,
        };
      case REMOVE_TOTAL:
        return {};
    default:
      return state;
  }
};

export default totalReducer;
