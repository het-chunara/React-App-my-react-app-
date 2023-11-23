import { combineReducers } from 'redux';
import { SET_USER_DATA, SET_SELECTED_PLAN, SET_SELECTED_ADDONS } from '../Redux-for-form/action1';

const userDataReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return action.payload;
    default:
      return state;
  }
};

const selectedPlanReducer = (state = null, action) => {
  switch (action.type) {
    case SET_SELECTED_PLAN:
      return action.payload;
    default:
      return state;
  }
};

const selectedAddonsReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_SELECTED_ADDONS:
      return action.payload;
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  userData: userDataReducer,
  selectedPlan: selectedPlanReducer,
selectedAddons: selectedAddonsReducer,
  
});




export default rootReducer;
