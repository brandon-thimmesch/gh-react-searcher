import React from 'react';
import RepoChart from './RepoChart';

class Contributions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        fetch(`https://api.github.com/repos/${this.props.params.owner}/${this.props.params.repo}/stats/participation`)
        .then(response => response.json())
        .then(data => {
            let contributions = {
                columns: [
                    ['owner'],
                    ['others']
                ],
                labels: true,
                axisLabel: {
                    x: 'Days Ago',
                    y: '# of Contributions'
                }
            };

            if (data.all) {
                if (data.all.length > 7) {
                    for (let i = data.all.length - 7; i < data.all.length; i++) {
                        contributions.columns[0].push(data.owner[i]);
                        contributions.columns[1].push(data.all[i] - data.owner[i]);
                    }
                } else {
                    for (let i = 0; i < data.all.length; i++) {
                        contributions.columns[0].push(data.owner[i]);
                        contributions.columns[1].push(data.all[i] - data.owner[i]);
                    }
                }
            }

            this.setState({
                contributions: contributions
            });
        });
    }

    render() {
        if (!this.state.contributions) {
            return (
                <div className="results-page">
                    <div className="jumbotron">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <h1>LOADING...</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center mb-4">Contributions For <strong>{this.props.params.owner}/{this.props.params.repo}</strong></h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <RepoChart data={this.state.contributions}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contributions;
