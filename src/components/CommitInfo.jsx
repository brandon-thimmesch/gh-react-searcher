import React from 'react';
import moment from 'moment';

class CommitInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        fetch(`https://api.github.com/repos/${this.props.params.user}/${this.props.params.repo}`)
        .then(response => response.json())
        .then(repo => {
            fetch(`https://api.github.com/repos/${this.props.params.user}/${this.props.params.repo}/commits`)
            .then(response => response.json())
            .then(commits => {
                this.setState({
                    repo: repo,
                    commits: commits
                });
            });
            }
        );
    }

    render() {
        if (!this.state.repo) {
            return (
                <div className="repo-info">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card repocard">LOADING...</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        const repo = this.state.repo;
        const commits = this.state.commits;
        const commitDetails = commits.map(item =>
            <li className="list-group-item">
                <a href={item.author.html_url}><img className="commit-author-img" src={item.author.avatar_url} alt="Contributing author avatar"/></a>
                <p>{item.author.login} Committed: {item.commit.author.date}</p>
                <p>{item.commit.message}</p>
            </li>
        )

        return(
            <div className="repo-info">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <a href={repo.html_url}><img className="card-img-top repo-img w-25" src={repo.owner.avatar_url} alt="A Github owner avatar"/></a>
                            <a href={repo.html_url}><h5 className="card-title">{repo.full_name}</h5></a>
                            <p className="card-text">{repo.description}</p>
                            <ul className="list-group">
                                {commitDetails}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CommitInfo;