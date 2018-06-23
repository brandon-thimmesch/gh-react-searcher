import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Search from './components/Search';
import Results from './components/Results';
import CommitInfo from './components/CommitInfo';
import Contributions from './components/Contributions';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Search}/>
            <Route path="/search/repositories/:searchQuery/:sortBy/:order" component={Results}/>
            <Route path="/repository/:user/:repo/commits" component={CommitInfo}/>
            <Route path="/contributions" component={Contributions}/>
        </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
