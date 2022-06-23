import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import saveEmail from '../actions';
import './LoginUser.css';

class LoginUser extends Component {
    state = {
      email: '',
      password: '',
    };

    handleChange = ({ target }) => {
      const { name, value } = target;
      this.setState({ [name]: value });
    }

    validarInputs = () => {
      const { email, password } = this.state;
      const minLength = 6;
      const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      return !(emailRegex.test(email) && password.length >= minLength);
    }

    handleButton = () => {
      const { salvaEmail, carteira } = this.props;
      const { email } = this.state;
      salvaEmail(email);
      carteira('/carteira');
    }

    render() {
      const { email, password } = this.state;
      return (
        <div className="container-login">
          <div className="title">
            <h1>Login</h1>
          </div>
          <div className="div-email">
            <label htmlFor="email-input">
              Email:
              <input
                className="input-login"
                data-testid="email-input"
                type="email"
                placeholder="E-mail"
                onChange={ this.handleChange }
                name="email"
                value={ email }
              />
            </label>
          </div>
          <div className="div-password">
            <label htmlFor="password-input">
              Senha:
              <input
                className="input-login"
                data-testid="password-input"
                type="password"
                placeholder="Senha"
                onChange={ this.handleChange }
                name="password"
                value={ password }
              />
            </label>
          </div>
          <div className="div-button">
            <button
              className="button-login"
              disabled={ this.validarInputs() }
              type="button"
              onClick={ this.handleButton }
            >
              Entrar
            </button>
          </div>

        </div>
      );
    }
}

const mapDispatchToProps = (dispatch) => ({
  salvaEmail: (email) => dispatch(saveEmail(email)),
});

LoginUser.propTypes = {
  carteira: PropTypes.func.isRequired,
  salvaEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(LoginUser);
