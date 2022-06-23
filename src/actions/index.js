export const SUBMIT_WALLET = 'SUBMIT_WALLET';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
const END_POINT = 'https://economia.awesomeapi.com.br/json/all';

export const currencySucess = (currencies) => ({
  type: FETCH_SUCCESS,
  currencies,
});

export const saveEmail = (email) => ({
  type: SUBMIT_WALLET,
  email,
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
