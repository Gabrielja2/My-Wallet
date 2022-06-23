import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { connect } from 'react-redux';
import saveEmail from '../actions';

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
        <div>
          oi, aqui é o login
          <input
            data-testid="email-input"
            type="email"
            placeholder="E-mail"
            onChange={ this.handleChange }
            name="email"
            value={ email }
          />
          <input
            data-testid="password-input"
            type="password"
            placeholder="Senha"
            onChange={ this.handleChange }
            name="password"
            value={ password }
          />
          <button
            disabled={ this.validarInputs() }
            type="button"
            onClick={ this.handleButton }
          >
            Entrar
          </button>

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
