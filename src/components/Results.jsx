import React from 'react';
import RepoCard from './RepoCard';

class Results extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        const searchParams = this.props.params;
        
        fetch(`https://api.github.com/search/repositories?q=${searchParams.searchQuery}&sort=${searchParams.sortBy}&order=${searchParams.order}`)
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
        const repoCards = repos.map(repo =>
            <div className="row" key={repo.id}>
                <div className="col-md-4 col-md-offset-8">
                    <RepoCard value={repo} />
                </div>
            </div>
        );

        return (
            <div className="results-page">
                <div className="container">
                    {repoCards}
                </div>
            </div>
        );
    }
}

export default Results;
