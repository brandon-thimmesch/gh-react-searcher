import React from 'react';

class RepoCard extends React.Component {
    render() {
        const repo = this.props.value;

        return (
            <div className="card repocard">
                <a href={repo.html_url}><img className="card-img-top repo-img" src={repo.owner.avatar_url} alt="A Github owner avatar"/></a>
                <div class="card-body">
                    <h5 className="card-title">{repo.full_name}</h5>
                    <p className="card-text">{repo.description}</p>
                </div>
            </div>
        );
    }
}

export default RepoCard;
