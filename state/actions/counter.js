import * as actionTypes from '../actionTypes';
import store from './../store';

export const increaseCounter = index => (dispatch, getState) => {
  dispatch({
    type: actionTypes.INCREASE,
    selected: index,
  });
};

export const decreaseCounter = index => (dispatch, getState) => {
  dispatch({
    type: actionTypes.DECREASE,
    selected: index,
  });
};

export const addCounter = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.ADD_COUNTER,
  });
};

export const removeCounter = index => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_COUNTER,
    selected: index,
  });
};

export const addTotal = () => (dispatch, getState) => {
  const estadoGlobal = getState().counter;
  dispatch({
    type: actionTypes.ADD_TOTAL,
    total: estadoGlobal,
  });

};


export const removeTotal = index => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_TOTAL,
    selected: index,
  });
};
