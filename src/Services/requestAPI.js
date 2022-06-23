// import currencySucess from '../actions/index';

const END_POINT = 'https://economia.awesomeapi.com.br/json/all';

const requestAPI = async () => {
  const response = await fetch(END_POINT);
  const json = await response.json();
  const array = Object.keys(json);
  const currencies = array.filter((arr) => arr);
  // dispatch(currencySucess);
  console.log('array', array);
  console.log('currencies', currencies);
  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export default requestAPI;
