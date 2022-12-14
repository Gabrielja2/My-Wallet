// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SUBMIT_WALLET } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SUBMIT_WALLET:
    return ({
      ...state,
      email: action.email,
    });
  default:
    return state;
  }
};
export default user;
