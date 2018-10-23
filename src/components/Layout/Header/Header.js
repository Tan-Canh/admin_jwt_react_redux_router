import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <Fragment>
                <nav className="nav nav-tabs|pills nav-stacked">
                    <Link className="nav-link active" to="/">Home</Link>
                    <Link className="nav-link" to="/login">Login</Link>
                    <Link className="nav-link disabled" to="sign-up">SignUp</Link>
                </nav>
            </Fragment>
        );
    }
}

export default Header;
