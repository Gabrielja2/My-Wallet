import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveExpenses } from '../actions';
import './Form.css';

class Form extends Component {
  state = {
    id: 0,
    currency: '',
    method: '',
    tag: '',
    description: '',
    value: '',
    // exchangeRates: {},
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick = (event) => {
    event.preventDefault();
    const { salvaExpenses } = this.props;
    salvaExpenses(this.state);
    this.setState((prev) => ({
      id: prev.id + 1,
      currency: '',
      method: '',
      tag: '',
      description: '',
      value: '',
      // exchangeRates: {},
    }));
  }

  render() {
    const { currencies } = this.props;
    const { currency, method, tag, description, value } = this.state;
    return (
      <form onSubmit={ this.handleClick } className="form">
        <div className="div-number">
          <label htmlFor="valor">
            Valor:
            {' '}
            <input
              data-testid="value-input"
              id="valor"
              type="number"
              name="value"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <div className="div-description">
          <label htmlFor="descri">
            Descrição:
            {' '}
            <input
              data-testid="description-input"
              id="descri"
              name="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <div className="div-currency">
          <label htmlFor="currencies">
            Moeda
            {' '}
            <select
              data-testid="currency-input"
              id="currencies"
              name="currency"
              value={ currency }
              onChange={ this.handleChange }
            >
              { currencies.map(
                (curr) => (
                  <option
                    key={ curr }
                  >
                    { curr }
                  </option>),
              )}
            </select>
          </label>
        </div>
        <div className="div-method">
          <label htmlFor="method">
            Método de Pagamento:
            {' '}
            <select
              data-testid="method-input"
              id="method"
              name="method"
              value={ method }
              onChange={ this.handleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
        </div>
        <div className="div-tag">
          <label htmlFor="tag">
            Categoria:
            {' '}
            <select
              data-testid="tag-input"
              id="tag"
              name="tag"
              value={ tag }
              onChange={ this.handleChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </div>
        <div className="div-button">
          <button
            type="submit"
          >
            Adicionar despesa
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  // expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
  salvaExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  // expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  salvaExpenses: (expenses) => dispatch(saveExpenses(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
