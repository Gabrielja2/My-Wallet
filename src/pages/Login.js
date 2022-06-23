import React from 'react';
import PropTypes from 'prop-types';
import LoginUser from '../Components/LoginUser';

class Login extends React.Component {
  carteira = (rota) => {
    const { history } = this.props;
    history.push(rota);
  }

  render() {
    return (
      <LoginUser carteira={ this.carteira } />
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
