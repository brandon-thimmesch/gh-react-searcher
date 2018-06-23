import React from 'react';
import { browserHistory as history } from 'react-router';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this._handleSubmit = this._handleSubmit.bind(this);
        this._handleAddTopicFilter = this._handleAddTopicFilter.bind(this);
        this.state = {
            topicFilters: []
        }
    }

    _handleSubmit(e) {
        e.preventDefault();
        history.push(`/search/repositories/${this.refs.userInput.value}/${this.refs.sortBy.value}/${this.refs.order.value}`)
    }

    _handleAddTopicFilter(e) {
        e.preventDefault();
        const newTopicFilters = this.state.topicFilters.push(this.refs.topicItem.value);
        
        this.setState({
            topicFilters: newTopicFilters
        });
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

                                <div className="input-group mt-3">
                                    <select className="custom-select" ref="sortBy">
                                        <option value="default">Sort By...</option>
                                        <option value="stars">Stars</option>
                                        <option value="forks">Forks</option>
                                        <option value="updated">Updated</option>
                                    </select>
                                    <select className="custom-select" ref="order">
                                        <option value="desc">Descending</option>
                                        <option value="asc">Ascending</option>
                                    </select>
                                </div>
                            </form>

                            <form onSubmit={this._handleAddTopicFilter}>
                                <div className="input-group mt-3">
                                    <input type="text" className="form-control" ref="topicItem" placeholder="Add a topic to filter by..." aria-label="Add a topic to filter by..."/>
                                    <div className="input-group-append">
                                        <button className="btn btn-success" type="button">+</button>
                                    </div>
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
