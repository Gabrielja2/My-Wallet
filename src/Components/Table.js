import React, { Component } from 'react';
import './Table.css';

class Table extends Component {
  render() {
    return (
      <div className="div-table">
        <table className="table">
          <tbody>
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
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;