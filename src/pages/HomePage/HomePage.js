import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <div className="container mt-100 centered">
                    <form>
                        <fieldset>
                            <div className="row">
                                <legend className="text-center">Thế giới KOF</legend>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-20">
                                    <div className="form-group">
                                        <Link to="/login" className="btn btn-primary col-lg-12" >Sign In</Link>
                                        <Link to="/sign-up" className="btn btn-success col-lg-12 mt-20">Sign Up</Link>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </Fragment>
        );
    }
}

export default HomePage;
