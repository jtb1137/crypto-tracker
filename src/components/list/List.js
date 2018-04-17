import React from 'react';
import { handleResponse } from '../../helpers'
import { API_URL } from '../../config';
import Loading from '../common/Loading';
;
class List extends React.Component {
    constructor() {
        super();

        this.state = {
            loading: false,
            currencies: [],
            error: null,
        };
    }

    componentDidMount() {
        this.setState({ loading: true });

        fetch(`${API_URL}/cryptocurrencies?page=1&perPage=20`)
        .then(handleResponse)
        .then((data) => {
            this.setState({ 
                currencies: data.currencies, 
                loading: false,
            });
        })
        .catch((error) => {
            this.setState({ 
                error: error.errorMessage, 
                loading: false,
            });
        });
    }

    renderChangePercent(percent) {
        if (percent > 0) {
            return <span className="percent-increased">{percent}% &uarr;</span>
        } else if (percent < 0) {
            return <span className="percent-decreased">{percent} &darr;</span>
        } else {
            return <span>{percent}</span>
        }
    }

    render() {
        const { loading, error, currencies } = this.state;

        if (loading) {
            return <div className="Loading-container"><Loading /></div>
        }

        if (error) {
            return <div className="Error">{this.state.error}</div>
        }

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
                                    <span className="Table-dollar">$ {currency.price}</span>
                                </td>
                                <td>
                                    <span className="Table-dollar">$ {currency.marketCap}</span>
                                </td>
                                <td>
                                    {this.renderChangePercent(currency.percentChange24h)}
                                </td>
                            </div>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default List;