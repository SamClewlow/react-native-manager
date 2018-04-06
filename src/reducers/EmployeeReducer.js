import { EMPLOYEES_FETCH_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  employees: {}
};

export default (state = INITIAL_STATE, action) => {
  console.log('EmployeeReducer called with action', action);
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      return { ...state, employees: action.payload };
    default:
      return state;
  }
};
