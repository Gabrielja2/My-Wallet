import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    // console.log(expenses);
    const result = expenses.reduce((acc, expense) => {
      const { value, currency, exchangeRates } = expense;
      const { ask } = exchangeRates[currency];

      acc += Number(value * ask);
      return acc;
    }, 0).toFixed(2);

    return (
      <header className="container-header">
        <div className="logo">
          {}
        </div>
        <p
          data-testid="email-field"
        >
          { email }
        </p>
        <span>TOTAL</span>
        <span
          data-testid="total-field"
        >
          { result }
        </span>
        <span
          className="div-currency"
          data-testid="header-currency-field"
        >
          BRL
        </span>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
