// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { FETCH_SUCCESS, SUBMIT_EXPENSES, DELETE_EXPENSE } from '../actions';

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
  case SUBMIT_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((exp) => exp.id !== action.id),
    };
  default:
    return state;
  }
};
export default wallet;
