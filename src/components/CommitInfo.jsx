import React from 'react';

class CommitInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // Probably a better way to do this, was surprised repo information wasn't included in commit data
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
                                <div className="card repo-info">LOADING...</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        const repo = this.state.repo;
        const commits = this.state.commits;
        let commitDetails;

        if (commits.length !== undefined) {
            commitDetails = commits.map(item =>
                <li key={item.sha} className="list-group-item">
                    <p>{item.commit.author.name}</p>
                    <a href={item.html_url}>
                        <p>{item.commit.message}</p>
                    </a>
                </li>
            );
        } else {
            commitDetails =
                <li key="noCommits">
                    <p>{commits.message}</p>
                </li>
        }

        return(
            <div className="repo-info">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <a href={repo.html_url}><img className="card-img-top repo-img w-25" src={repo.owner.avatar_url} alt="A Github owner avatar"/></a>
                            <a href={repo.html_url}><h1 className="card-title">{repo.full_name}</h1></a>
                            <p className="card-text">{repo.description}</p>
                            <h2>Latest Commits</h2>
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
