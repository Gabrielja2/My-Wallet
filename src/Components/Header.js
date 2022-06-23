/* import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';
import requestAPI from '../Services/requestAPI';

class Header extends Component {
  state = {
    initialValue: 0,
    currencies: [],
  }

  componentDidMount =() => {
    const { currencies } = this.state;
    const retornoApi = requestAPI();
    this.setState({
      currencies: retornoApi,
    });
    console.log(currencies);
  }

  render() {
    const { initialValue } = this.state;
    const { email } = this.props;
    return (
      <header className="container-header">
        <div className="logo">
          {}
        </div>
        <input
          data-testid="email-field"
          value={ email }
          type="email"
        />
        <input
          data-testid="total-field"
          value={ `despesas total:${initialValue} ` }
          type="email"
        />
        <div
          className="div-currency"
          data-testid="header-currency-field"
        >
          BRL
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header); */
