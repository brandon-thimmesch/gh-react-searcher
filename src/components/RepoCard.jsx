import React from 'react';

class RepoCard extends React.Component {
    render() {
        return (
            <div>
                { this.props.value }
            </div>
        );
    }
}

export default RepoCard;
