import React, { Component, Fragment } from 'react';
import './App.css';
import routes from '../../routes';
import { Switch, Route } from 'react-router-dom';
import Header from './Header/Header';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                {this._showRoutes(routes)}
            </Fragment>
        );
    }

    _showRoutes = routes => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => (
                <Route key={index} path={route.path} exact={route.exact} component={route.main} />
            ))
        }

        return <Switch>{result}</Switch>
    }
}

export default App;
