export const SUBMIT_WALLET = 'SUBMIT_WALLET';

const saveEmail = (email) => ({
  type: SUBMIT_WALLET,
  payload: email,
});

export default saveEmail;
