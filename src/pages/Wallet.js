import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Wallet.css';
import { requestAPI } from '../actions';

class Wallet extends Component {
  componentDidMount = async () => {
    const { thunkFetch } = this.props;
    thunkFetch();
  }

  render() {
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
          { `despesas total:${0} ` }
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
  thunkFetch: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});
const mapDispatchToProps = (dispatch) => ({
  thunkFetch: () => dispatch(requestAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
