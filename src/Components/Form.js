import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveExpenses, updateExpense } from '../actions';
import './Form.css';

const INITIAL_STATE = {
  id: 0,
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  description: '',
  value: '',
};

class Form extends Component {
  state = {
    ...INITIAL_STATE,
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick = (event) => {
    event.preventDefault();
    const { salvaExpenses, editor } = this.props;
    if (editor) {
      const { expenseToEdit, actionExpenseUpdate, idToEdit: id } = this.props;
      actionExpenseUpdate({ ...expenseToEdit, ...this.state, id,
      });
      this.setState({ ...INITIAL_STATE });
    } else {
      salvaExpenses(this.state);
      this.setState(({ id }) => ({ ...INITIAL_STATE, id: id + 1 }));
    }
  }

  render() {
    const { currency, method, tag, description, value } = this.state;
    const { currencies, editor } = this.props;
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
              { currencies.map((curr) => (
                <option key={ curr }>{ curr }</option>))}
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
            {editor ? 'Editar despesa' : 'Adicionar despesa'}
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  salvaExpenses: PropTypes.func.isRequired,
  actionExpenseUpdate: PropTypes.func.isRequired,
  editor: PropTypes.bool.isRequired,
  expenseToEdit: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.number,
    tag: PropTypes.string,
    method: PropTypes.string,
    value: PropTypes.string,
  }),
  idToEdit: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  editor: state.wallet.editor,
  idToEdit: state.wallet.idToEdit,
  expenseToEdit: state.wallet.expenseToEdit,
});

const mapDispatchToProps = (dispatch) => ({
  salvaExpenses: (expenses) => dispatch(saveExpenses(expenses)),
  actionExpenseUpdate: (expense) => dispatch(updateExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.defaultProps = {
  expenseToEdit: {},
};
