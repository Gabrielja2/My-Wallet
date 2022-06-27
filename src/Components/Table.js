import React, { Component } from 'react';
import './Table.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions';

class Table extends Component {
  handleClick = (id) => {
    const { dispatchDelExpense } = this.props;
    dispatchDelExpense(id);
  };

  // findCurrency(array, currency, key) {
  //   // console.log(Object.entries(array).find((item) => item[0] === currency)[1]);
  //   return Object.entries(array).find((item) => item[0] === currency)[1][key];
  // }

  render() {
    const { expenses } = this.props;
    return (
      <div className="div-table">
        <table className="table">
          <thead>
            <tr className="table-head">
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(
              ({
                id,
                description,
                tag,
                method,
                value,
                exchangeRates,
                currency,
              }) => (
                <tr key={ id } className="div-tr">
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{Number(value).toFixed(2)}</td>
                  <td>
                    {exchangeRates[currency].name.split('/')[0]}
                  </td>
                  <td>
                    {Number(exchangeRates[currency].ask).toFixed(2)}
                  </td>
                  <td>
                    {(Number(value) * Number(exchangeRates[currency].ask)).toFixed(2)}
                  </td>
                  <td>Real</td>
                  <td>
                    <button
                      data-testid="edit-btn"
                      className="create"
                      type="button"
                      onClick={ null }
                    >
                      <ion-icon name="create" />
                    </button>
                    <button
                      data-testid="delete-btn"
                      className="trash"
                      type="button"
                      onClick={ () => this.handleClick(id) }
                    >
                      <ion-icon name="trash" />
                    </button>
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatchDelExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchDelExpense: (id) => dispatch(deleteExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
