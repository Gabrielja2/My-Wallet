import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends Component {
  render() {
    const { email } = this.props;
    // console.log(email);
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

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);
