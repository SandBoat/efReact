import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, browserHistory, Route, IndexRoute } from 'react-router'
import { App, Home, Board } from './containers/index'

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/Board" component={Board}/>
        </Route>
    </Router>
    ), document.getElementById('root'));
    // registerServiceWorker();
