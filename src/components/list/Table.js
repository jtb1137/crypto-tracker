import React from 'react';
import PropTypes from 'prop-types';

const Table = (props) => {
    const { currencies, renderChangePercent } = props;

    return (
        <div className="Table-container">
            <table className="table">
                <thead className="Table-head">
                    <tr>
                        <th>Cryptocurrency</th>
                        <th>Price</th>
                        <th>Market Cap</th>
                        <th>24H Change</th>
                    </tr>
                </thead>
                <tbody className="Table-body">
                    {currencies.map ((currency) => (
                        <div key={currency.id}>
                            <td>
                                <span className="Table-rank">{currency.rank}</span>
                                {currency.name}
                            </td>
                            <td>
                                <span className="Table-dollar">$ </span>
                                {currency.price}
                            </td>
                            <td>
                                <span className="Table-dollar">$ </span>
                                {currency.marketCap}
                            </td>
                            <td>
                                {renderChangePercent(currency.percentChange24h)}
                            </td>
                        </div>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

Table.propTypes = {
    currencies: PropTypes.array.isRequired,
    renderChangePercent: PropTypes.func.isRequired,
}

export default Table;