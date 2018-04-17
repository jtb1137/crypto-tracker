import React from 'react';
import { withRouter } from 'react-router-dom';
import { API_URL } from '../../config';
import { handleResponse } from '../../helpers';

class Search extends React.Component {
    constructor() {
        super();

        this.state = {
            searchQuery: '',
            searchResults: [],
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    handleChange(event) {
        const searchQuery = event.target.value;

        this.setState({ searchQuery });

        if (!searchQuery) {
            return '';
        }

        fetch(`${API_URL}/autocomplete?searchQuery=${searchQuery}`)
        .then(handleResponse)
        .then((result) => {

            this.setState({ searchResults: result });

        });
    }
    handleRedirect(currencyId) {
        this.setState({
            searchQuery: '',
            searchResults: [],
        });

        this.props.history.push(`/currency/${currencyId}`);
    }

    renderSearchResults() {
        const { searchResults, searchQuery } = this.state;

        if (!searchQuery) {
            return '';
        }

        if (searchResults.length > 0) {
            return (
                <div className="search-container">
                    {searchResults.map(result => (
                        <div key={result.id} onClick={() => this.handleRedirect(result.id)} >
                            {result.name} ({result.symbol})
                        </div>
                    ))}
                </div>
            )
        }

        return (
            <div className="search-container">No results found</div>
        )
    }

    render() {
        const { searchQuery } = this.state;
        return(
            <div>
                <input className="Search-input" type="text" placeholder="Currency Name" onChange={this.handleChange} value={searchQuery} />

                {this.renderSearchResults()}
            </div>
        );
    }
}

export default withRouter(Search);