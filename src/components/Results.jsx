import React from 'react';
import RepoCard from './RepoCard';
// import { Link } from 'react-router';

class Results extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        fetch(`https://api.github.com/search/repositories?q=${this.props.params.searchQuery}`)
        .then(response => response.json())
        .then(repos => {
            this.setState({
                repos: repos
            });
            }
        );
    }

    render() {
        if (!this.state.repos) {
            return (
                <div className="results-page">LOADING...</div>
            );
        }

        const repos = this.state.repos.items;
        const repoCards = repos.map(repo => <RepoCard key={repo.id} value={repo.full_name} />);

        return (
            <div className="results-page">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <ul>
                                {repoCards}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Results;
