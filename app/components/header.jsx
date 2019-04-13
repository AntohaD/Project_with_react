import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

export default class Nav extends React.Component {
    render() {
        return <div className="navbar navbar-expand-sm bg-dark navbar-dark">
            <Link className="navbar-brand" to="/">LOGO</Link>
            <ul className="navbar-nav ml-auto flex-nowrap">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/cats">Cats</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contacts">Contacts</Link>
                </li> 
            </ul>
        </div>
    }
}