import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

export default class Main extends React.Component {
    render() {
        return <div>
            <h2 className="homeTitle">Main</h2>
            <Link type="button" class="btn btn-dark" to="/cats">See cats</Link>
        </div>
    }
}