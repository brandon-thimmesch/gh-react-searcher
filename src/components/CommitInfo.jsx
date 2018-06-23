import React from 'react';

class CommitInfo extends React.Component {
    componentDidMount() {
        fetch(`https://api.github.com/repos/${this.props.params.user}/${this.props.params.repo}/commits`)
        .then(response => response.json())
        .then(commits => {
            this.setState({
                commits: commits
            });
            }
        );
    }

    render() {
        return(
            <div className="repo-info">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p>Wheee!</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CommitInfo;
