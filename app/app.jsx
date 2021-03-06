const ReactDOM = require('react-dom');
const React = require('react');
const ItemsList = require('./components/itemList.jsx');
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header.jsx';
import Contacts from './components/contacts.jsx';
import Main from './components/main.jsx';
import About from './components/about.jsx';
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
    <Router>
        <div>
            <Header />
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/cats" component={ItemsList} />
                    <Route path="/about" component={About} />
                    <Route path="/contacts" component={Contacts} />
                </Switch>
        </div>
    </Router>,
    document.getElementById("app")
)