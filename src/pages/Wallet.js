import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../Components/Header.css';
import requestAPI from '../Services/requestAPI';

class Wallet extends Component {
  state = {
    initialValue: 0,
    currencies: [],
  }

  componentDidMount = async () => {
    const { currencies } = this.state;
    const retornoApi = await requestAPI();
    this.setState({
      currencies: retornoApi.USD.codein,
    });
    console.log(currencies);
    console.log(retornoApi.USD.codein);
  }

  render() {
    const { initialValue } = this.state;
    const { email } = this.props;
    return (
      <header className="container-header">
        <div className="logo">
          {}
        </div>
        <p
          readOnly
          data-testid="email-field"
        >
          { email }
        </p>
        <p
          readOnly
          data-testid="total-field"
        >
          { `despesas total:${initialValue} ` }
        </p>
        <div
          readOnly
          className="div-currency"
          data-testid="header-currency-field"
        >
          BRL
        </div>
      </header>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
