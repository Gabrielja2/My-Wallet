import React, { Component } from 'react';
import './Table.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends Component {
  queryCurrency(array, currency, key) {
    // console.log(Object.entries(array).find((item) => item[0] === currency));
    return Object.entries(array).find((item) => item[0] === currency)[1][key];
  }

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
        </table>
        <table className="table">
          {expenses.map((exp) => (
            <tbody key={ exp.id }>
              <tr className="div-tr">
                <td>{exp.description}</td>
                <td>{exp.tag}</td>
                <td>{exp.method}</td>
                <td>{Number(exp.value).toFixed(2)}</td>
                <td>
                  {this.queryCurrency(
                    exp.exchangeRates, exp.currency, 'name',
                  ).split('/')[0]}
                </td>
                <td>
                  {Number(this.queryCurrency(
                    exp.exchangeRates, exp.currency, 'ask',
                  )).toFixed(2)}

                </td>
                <td>
                  {(Number(exp.value) * Number(
                    this.queryCurrency(exp.exchangeRates, exp.currency, 'ask'),
                  ))
                    .toFixed(2)}
                </td>
                <td>
                  Real
                </td>
                <td>btn</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
