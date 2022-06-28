// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { FETCH_SUCCESS, SUBMIT_EXPENSES,
  DELETE_EXPENSE, EDIT_EXPENSE, UPDATE_EXPENSE } from '../actions';

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
  case EDIT_EXPENSE:
    return {
      ...state,
      editor: true,
      idToEdit: action.idToEdit,
      expenseToEdit: action.expense,
    };
  case UPDATE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      }),
      expenseToEdit: {},
      editor: false,
    };
  default:
    return state;
  }
};
export default wallet;
