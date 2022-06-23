// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { FETCH_SUCCESS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,

};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_SUCCESS:
    return {
      ...state,
      currencies: action.currencies,
    };
  default:
    return state;
  }
};
export default wallet;
