import React from 'react';
import { API_URL } from '../../config';
import { handleResponse, renderChangePercent } from '../../helpers';
import Loading from '../common/Loading';

class Detail extends React.Component {
    constructor() {
        super();

        this.state = {
            currency: {},
            loading: false,
            error: null,
        };
    }

    componentDidMount() {
        const currencyId = this.props.match.params.id;

        this.fetchCurrency(currencyId);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.location.pathname !== nextProps.location.pathname) {
            const newCurrencyId = nextProps.match.params.id;

            this.fetchCurrency(newCurrencyId);
        }
    }

    fetchCurrency(currencyId) {
        this.setState({ loading: true })

        fetch(`${API_URL}/cryptocurrencies/${currencyId}`)
        .then(handleResponse)
        .then((currency) => {
            this.setState({
                loading: false,
                error: null,
                currency,
            });
        })
        .catch((error) => {
            this.setState = {
                loading: false,
                error: error.errorMessage,
            }
        });
    }

    detch
    render() {
        const { loading, error, currency } = this.state;

        if (loading) {
            return <div className="Loading-container"><Loading /></div>
        }

        if (error) {
            return <div>{error}</div>
        }

        return (
            <div>
                <h1>
                    {currency.name} ({currency.symbol})
                </h1>
                <div>
                    <div>
                        Price <span className="Detail-price">$ {currency.price}</span>
                    </div>
                    <div>
                        Rank <span className="Detail-price">{currency.rank}</span>
                    </div>
                    <div>
                        24H Change <span className="Detail-price">{renderChangePercent(currency.percentChange24h)}</span>
                    </div>
                    <div>
                        24H Volume <span className="Detail-price">{currency.volume24h}</span>
                    </div>
                    <div>
                        Market Cap <span className="Detail-price">{currency.marketCap}</span>
                    </div>
                    <div>
                        Total Supply <span className="Detail-price">{currency.totalSupply}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Detail;