import React, { Component, Fragment } from 'react';
import { loginRequest } from './../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { getToken } from './../../actions/index';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtUsername: '',
            txtPassword: '',
            AUTHENTICATED_ERROR: '',
            isCheckError: false
        };
    }

    
    componentWillMount() {
        const { login, history } = this.props;
        console.log(login)
        if (login.authenticated) {
            history.push('/dashboard');
        }
    }
    
    componentWillReceiveProps({ login }) {
        if (!login.authenticated)
            return this.setState({
                AUTHENTICATED_ERROR: login.payload,
                isCheckError: true
            })

        const { history } = this.props;
        history.push('/dashboard')
        // console.log(this.props)
    }

    // componentWillMount() {
    //     this._getSessonStorage();
    // }

    // _getSessonStorage = () => {
    //     const token = sessionStorage.getItem('token');
    //     return token ? this.props.getToken(token) : null;
    // }

    _setTimeOut = () => {
        return setTimeout(() => {
            this._renderError();
        }, 2000)
    }

    _renderError = () => {
        return (
            <div className="alert alert-danger" role="alert">
                <strong>{this.state.AUTHENTICATED_ERROR}    ---   </strong> <Link to="/sign-up" className="alert-link">Register again?</Link>
            </div>
        );
    }

    _onChange = e => {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        })

        console.log(`name: ${name} - value: ${value}`);
    }

    _onSubmit = e => {
        e.preventDefault();
        const { txtUsername, txtPassword } = this.state;
        const { history } = this.props;
        this.props.loginRequest(txtUsername, txtPassword, history);
        // console.log(`username: ${txtUsername} - password: ${txtPassword} - history: ${history}`)

    }

    render() {
        
        return (
            <Fragment>
                <form onSubmit={this._onSubmit}>
                    <fieldset >

                        <div className="alert alert-info">
                            <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                            <strong>Login</strong>
                        </div>
                        {this.state.isCheckError ? this._renderError() : null}
                        {/* {console.log(this.state.isCheckError)} */}
                        {/* {this._renderError() } */}
                        <div className="row centered mt-100">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="form-group">
                                    <label ></label>
                                    <small id="helpId" className="form-text text-muted">Username</small>
                                    <input type="text" className="form-control" name="txtUsername" id="" aria-describedby="helpId" placeholder="Username" onChange={this._onChange} />
                                </div>

                                <div className="form-group">
                                    <label ></label>
                                    <small id="helpId" className="form-text text-muted">Password</small>
                                    <input type="text" className="form-control" name="txtPassword" id="" aria-describedby="helpId" placeholder="Password" onChange={this._onChange} />
                                </div>
                            </div>
                        </div>

                        <div className="row centered">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <button type="submit" className="btn btn-primary col-lg-2 centered">Submit</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        login: state.auth
    }
}

const mapDispatchToProps = (dispatch, prop) => {
    return {
        loginRequest: (username, password, history) => {
            dispatch(loginRequest(username, password, history))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
