const END_POINT = 'https://economia.awesomeapi.com.br/json/all';

const requestAPI = async () => {
  const response = await fetch(END_POINT);
  const json = await response.json();
  // console.log(json);
  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export default requestAPI;
