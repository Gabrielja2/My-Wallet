import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { currencies } = this.props;
    console.log(currencies);
    return (
      <form className="">
        <div className="div-number">
          <label htmlFor="value-input">
            Valor:
            <input
              data-testid="value-input"
              type="number"
            />
          </label>
        </div>
        <div className="div-description">
          <label htmlFor="description-input">
            Descrição:
            <select data-testid="description-input">
              <option>Gastos Mensais</option>
              <option>Gastos extras</option>
              <option>Gastos com Alimentação</option>
            </select>
          </label>
        </div>
        <div className="div-currency">
          <label htmlFor="currencies">
            Moeda
            <select id="currencies" data-testid="currency-input">
              { currencies.map(
                (currency) => (
                  <option
                    key={ currency }
                  >
                    { currency }
                  </option>),
              )}
            </select>
          </label>
        </div>
        <div className="div-method">
          <label htmlFor="method-input">
            Método de Pagamento:
            <select data-testid="method-input">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
        </div>
        <div className="div-tag">
          <label htmlFor="tag-input">
            Categoria:
            <select data-testid="tag-input">
              <option value="Alimentação">Alimentacão</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Form);
