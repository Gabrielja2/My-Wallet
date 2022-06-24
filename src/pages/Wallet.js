import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Wallet.css';
import { requestAPI } from '../actions';
import Header from '../Components/Header';
import Form from '../Components/Form';

class Wallet extends Component {
  componentDidMount = async () => {
    const { thunkFetch } = this.props;
    thunkFetch();
  }

  render() {
    // const { email } = this.props;
    return (
      <div>
        <Header />
        <Form />
      </div>
    );
  }
}

Wallet.propTypes = {
  thunkFetch: PropTypes.func.isRequired,
  // email: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  thunkFetch: () => dispatch(requestAPI()),
});

export default connect(null, mapDispatchToProps)(Wallet);
