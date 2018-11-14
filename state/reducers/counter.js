import {
  INCREASE,
  DECREASE,
  ADD_COUNTER,
  REMOVE_COUNTER,
  ADD_TOTAL,
  REMOVE_TOTAL,
} from '../actionTypes';

import { counter as counterInitialState } from '../initialState';


const counterReducer = (state = counterInitialState, action) => {
  const { items } = state;
  const { total } = state;
  const { selected } = action;
  let newstate =  state;
  let newTotal = 0;
  switch (action.type){
    case INCREASE:
      newstate.items =[
        ...items.slice(0, selected),
        items[selected] + 1,
        ...items.slice(selected + 1),
      ];
         newstate.items.map(function(item,i){
             newTotal += item;
        });
        newstate.total =newTotal;
        return {
          ...state,
          selected,
          items: newstate.items} ;
    case DECREASE:
      newstate.items = [
        ...items.slice(0, selected),
        items[selected] - 1,
        ...items.slice(selected + 1),
      ];
      newstate.items.map(function(item,i){
          newTotal += item;
     });
     newstate.total =newTotal;

      return {
        ...state,
        selected,
        items: newstate.items,
      };
    case ADD_COUNTER:
      newItems = [
        ...items,
        0, // this is a new item
      ];

      return {
        ...state,
        items: newItems,
      };
    case REMOVE_COUNTER:
      // remove the last item
      newstate.items = [
        ...items.slice(0, selected),
        ...items.slice(selected + 1),
      ];
      newstate.items.map(function(item,i){
          newTotal += item;
     });
     newstate.total =newTotal;

      return {
        ...state,
        items: newstate.items,
      };
    default:
      return state;
  }
};

export default counterReducer;
