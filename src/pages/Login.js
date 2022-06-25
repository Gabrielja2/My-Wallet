import React from 'react';
import PropTypes from 'prop-types';
import LoginUser from '../Components/LoginUser';

class Login extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <LoginUser history={ history } />
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
