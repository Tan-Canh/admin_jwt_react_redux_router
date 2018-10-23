import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { signUpRequest } from '../../actions';

class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtUsername: '',
            txtPassword: '',
            txtFullname: '',
            txtEmail: '',
            txtPhone: ''
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
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
        const { txtUsername, txtPassword, txtFullname, txtEmail, txtPhone } = this.state;
        const { history } = this.props;

        const user = {
            fullName: txtFullname,
            userName: txtUsername,
            password: txtPassword,
            email: txtEmail,
            phone: txtPhone
        }

        this.props.signUpRequest(user, history)
    }


    render() {
        return (
            <Fragment>
                <form onSubmit={this._onSubmit}>
                    <fieldset >

                        <div className="alert alert-info">
                            <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                            <strong>Sign Up</strong>
                        </div>

                        <div className="row centered">
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

                                <div className="form-group">
                                    <label ></label>
                                    <small id="helpId" className="form-text text-muted">Fullname</small>
                                    <input type="text" className="form-control" name="txtFullname" id="" aria-describedby="helpId" placeholder="Fullname" onChange={this._onChange} />
                                </div>

                                <div className="form-group">
                                    <label ></label>
                                    <small id="helpId" className="form-text text-muted">Email</small>
                                    <input type="text" className="form-control" name="txtEmail" id="" aria-describedby="helpId" placeholder="Email" onChange={this._onChange} />
                                </div>

                                <div className="form-group">
                                    <label ></label>
                                    <small id="helpId" className="form-text text-muted">Phone</small>
                                    <input type="text" className="form-control" name="txtPhone" id="" aria-describedby="helpId" placeholder="Phone" onChange={this._onChange} />
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
        signUp: state.auth
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        signUpRequest: (user, history) => {
            dispatch(signUpRequest(user, history))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
