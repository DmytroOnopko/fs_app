import React, {Component} from 'react';
import logo from '../Header/img/logo.svg.png'
import './entry.scss';
import { addUserToDb } from '../../action/user.action';
import {connect} from 'react-redux';


class SignUp extends Component{

    state = {
        name:             '',
        surname:          '',
        email:            '',
        login:            '',
        password:         '',
        img_url:          '',
        subscribers_id:   [],
        subscribed_to_id: [],
        posts:            []
    };

    handleChangeInfo = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
        })
    };

    createUser = (e) => {
        e.preventDefault();
        this.props.newUser(
            this.state.name,
            this.state.surname,
            this.state.email,
            this.state.login,
            this.state.password,
            this.state.img_url,
            this.state.subscribers_id,
            this.state.subscribed_to_id,
            this.state.posts
        );
        this.clearInput();
    };

    clearInput = () => {
        this.setState({
            name:             '',
            surname:          '',
            email:            '',
            login:            '',
            password:         '',
            img_url:          '',
            subscribers_id:   [],
            subscribed_to_id: [],
            posts:            []
        });
    };

    render() {
        return (
            <div className="col-6 d-flex align-items-center">
                <form className="form">
                    <div className="form-wrap">
                        <img className="form__img--size" src={logo} alt="logo"/>
                        <div className="input-group mb-3">
                            <input type="text"
                                   className="form-control"
                                   name="name"
                                   onChange={this.handleChangeInfo}
                                   placeholder="Your name"
                                   aria-label="name"
                                   aria-describedby="basic-addon1"
                                   value={this.state.name}
                            />
                        </div>

                        <div className="input-group mb-3">
                            <input type="text"
                                   className="form-control"
                                   name="surname"
                                   onChange={this.handleChangeInfo}
                                   placeholder="Your surname"
                                   aria-label="surname"
                                   aria-describedby="basic-addon2"
                                   value={this.state.surname}
                            />
                        </div>

                        <div className="input-group mb-3">
                            <input type="text"
                                   className="form-control"
                                   name="email"
                                   onChange={this.handleChangeInfo}
                                   placeholder="Your email"
                                   aria-label="email"
                                   aria-describedby="basic-addon1"
                                   value={this.state.email}
                            />
                        </div>

                        <div className="input-group mb-3">
                            <input type="text"
                                   className="form-control"
                                   name="login"
                                   onChange={this.handleChangeInfo}
                                   placeholder="Your login"
                                   aria-label="login"
                                   aria-describedby="basic-addon2"
                                   value={this.state.login}
                            />
                        </div>

                        <div className="input-group mb-3">
                            <input type="password"
                                   className="form-control"
                                   name="password"
                                   onChange={this.handleChangeInfo}
                                   placeholder="Your password"
                                   aria-label="password"
                                   aria-describedby="basic-addon2"
                                   value={this.state.password}
                            />
                        </div>

                        {/*<div className="custom-file mb-3">*/}
                        {/*<input type="file" className="custom-file-input" onChange={this.handleChangeInfo} id="customFileLangHTML"/>*/}
                        {/*<label className="custom-file-label" htmlFor="customFileLangHTML" data-browse="Upload">Upload your image</label>*/}
                        {/*</div>*/}

                        <button type="submit"
                                className="btn btn-primary btn-lg btn-block"
                                onClick={this.createUser}
                        >Sign up</button>

                        <span className="form-wrap__divider my-3">or</span>

                        <a href="http://localhost:3000/"
                           className="btn btn-secondary btn-lg btn-block"
                           role="button"
                           aria-pressed="true"
                        >Log in</a>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        newUser: (
            name,
            surname,
            email,
            login,
            password,
            img_url,
            subscribers_id,
            subscribed_to_id,
            posts
        ) => dispatch(
                addUserToDb(
                    name,
                    surname,
                    email,
                    login,
                    password,
                    img_url,
                    subscribers_id,
                    subscribed_to_id,
                    posts
                )
        )
    }
};

export default connect(null, mapDispatchToProps)(SignUp);
