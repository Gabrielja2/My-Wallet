export const SUBMIT_WALLET = 'SUBMIT_WALLET';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const SUBMIT_EXPENSES = 'SUBMIT_EXPENSES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const UPDATE_EXPENSE = 'UPDATE_EXPENSE';

const END_POINT = 'https://economia.awesomeapi.com.br/json/all';

export const saveEmail = (email) => ({
  type: SUBMIT_WALLET,
  email,
});

export const currencySucess = (currencies) => ({
  type: FETCH_SUCCESS,
  currencies,
});

export const createExpense = (expenses) => ({
  type: SUBMIT_EXPENSES,
  expenses,
});

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  id,
});

export const editExpense = (idToEdit, expense) => ({
  type: EDIT_EXPENSE,
  idToEdit,
  expense,
});

export const updateExpense = (expense) => ({
  type: UPDATE_EXPENSE,
  payload: expense,
});

export const requestAPI = () => async (dispatch) => {
  const response = await fetch(END_POINT);
  const json = await response.json();
  const array = Object.keys(json);
  const currencies = array.filter((arr) => arr !== 'USDT');
  dispatch(currencySucess(currencies));
  // console.log(json);
  // console.log('array', array);
  // console.log('currencies', currencies);
};

export const saveExpenses = (expense) => async (dispatch) => {
  const response = await fetch(END_POINT);
  const exchangeRates = await response.json();
  const newExpense = { ...expense, exchangeRates };
  dispatch(createExpense(newExpense));
};
