import React from 'react';
import { browserHistory as history } from 'react-router';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleSubmit(e) {
        e.preventDefault();
        history.push(`/search/repositories/${this.refs.userInput.value}`)
    }

    render() {
        return (
            <div className="search-page">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>Search for Github Repos</h2>
                            <form onSubmit={this._handleSubmit}>
                                <div className="input-group">
                                    <input ref="userInput" className="form-control" type="text" />
                                    <button className="btn btn-primary">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Search;