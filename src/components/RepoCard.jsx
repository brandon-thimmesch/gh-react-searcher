import React from 'react';
import { browserHistory as history } from 'react-router';

class RepoCard extends React.Component {
    constructor(props) {
        super(props);
        this._handleClickCommits = this._handleClickCommits.bind(this);
        this._handleClickGraph = this._handleClickGraph.bind(this);
        this.state = {};
    }

    componentDidMount() {
        this.setState({
            repo: this.props.value
        });
    }

    _handleClickCommits(e) {
        e.preventDefault();
        history.push(`/repository/${this.state.repo.owner.login}/${this.state.repo.name}/commits`)
    }

    _handleClickGraph(e) {
        e.preventDefault();
        history.push(`/contributions/${this.state.repo.owner.login}/${this.state.repo.name}`);
    }

    render() {
        if (!this.state.repo) {
            return (
                <div className="card repo-card">LOADING...</div>
            );
        }

        const repo = this.state.repo;

        return (
            <div className="card repo-card">
                <a href={repo.html_url}><img className="card-img-top repo-img" src={repo.owner.avatar_url} alt="A Github owner avatar"/></a>
                <div className="card-body">
                    <a href={repo.html_url}><h5 className="card-title">{repo.full_name}</h5></a>
                    <p className="card-text">{repo.description}</p>
                    <button className="btn btn-primary" onClick={this._handleClickCommits}>View Commit Details</button>
                    <button className="btn btn-success mt-2" onClick={this._handleClickGraph}>View Contribution Graph</button>
                </div>
            </div>
        );
    }
}

export default RepoCard;
