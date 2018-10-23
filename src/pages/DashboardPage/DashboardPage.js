import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { clearToken } from './../../actions/index';
import { Link } from 'react-router-dom';

class DashboardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtGetToken: ''
        };
    }

    componentWillMount() {
        const { authToken } = this.props;
        const { history } = this.props;
        if (!authToken.user) {
            history.push('/login');
        }
    }



    _checkAuth = () => {
        const { authenticated } = this.props.authToken;
        if (authenticated) {
            return (

                <div className="alert alert-success">
                    <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                    <strong>Đăng nhập thành công</strong> NO
                </div>

            )
        }
    }

    _showAlert = () => {
        const { authenticated } = this.props.authToken;
        if (!authenticated) {
            return (
                <div className="alert alert-warning" role="alert">
                    <strong>Bạn phải đăng nhập hoặc đăng kí!</strong>

                    <div className="row">
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                            <Link to="login" className="alert-link">Đăng nhập</Link>
                        </div>
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                            <Link to="/sign-up" className="alert-link">Đăng kí</Link>
                        </div>
                    </div>

                </div>
            )
        }
    }

    _onCLick = () => {
        this.props.clearToken();
        const { history } = this.props;
        history.push('/login');
    }

    _getToken = () => {
        const { token } = this.props.authToken.user;
        this.setState({
            txtGetToken: token
        });
    }

    render() {

        return (
            <Fragment>
                {/* {this._showAlert()} */}
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="alert alert-success" role="alert">
                            {this._checkAuth()}
                            <p></p>
                            <p className="mb-0"></p>
                        </div>
                    </div>

                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <button type="button" className="btn btn-dark" data-toggle="button" aria-pressed="false" autoComplete="off" onClick={this._onCLick}>Log out</button>
                    </div>

                    <br />
                    <br />
                    <br />




                    <div className="form-group">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <button type="button" className="btn btn-dark" data-toggle="button" aria-pressed="false" autoComplete="off" onClick={this._getToken}>Lấy Token</button>
                        </div>

                        <label className="col-sm-4 control-label">Token</label>
                        <div className="col-sm-10">
                            <input type="email" name="txtGetToken" id="input" className="form-control" value={this.state.txtGetToken} required="required" readOnly />
                        </div>
                    </div>


                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        authToken: state.auth
    }
}

const mapDispatchToProps = (distpatch, props) => {
    return {
        clearToken: () => {
            distpatch(clearToken())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
