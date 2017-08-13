import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router'
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <ul role="navigation">
                    <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                    <li><Link to="/Board" activeClassName="active">Board</Link></li>
                </ul>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}