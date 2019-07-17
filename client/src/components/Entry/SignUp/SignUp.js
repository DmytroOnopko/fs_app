import React, {Component} from 'react';
import logo from '../../Header/img/logo.svg.png'
import {addUserToDb} from '../../../action/user.action';
import {connect} from 'react-redux';
import Success from "../Message/Success/Success";
import Error from "../Message/Error/Error";
import './signUp.scss';

class SignUp extends Component {

    state = {
        name: '',
        surname: '',
        email: '',
        password: '',
        img_url: '',
        subscribers_id: [],
        subscribed_to_id: [],
        posts: []
    };

    onChange = (e) => {
        switch (e.target.name) {
            case 'img_url':
                this.setState({img_url: e.target.files[0]});
                break;
            default:
                this.setState({[e.target.name]: e.target.value});
        }
    };

    onSubmit = (e) => {
        e.preventDefault();

        const status = this.state.name.length !== 0 &&
            this.state.surname.length !== 0 &&
            this.state.email.length !== 0 &&
            this.state.password.length !== 0 &&
            this.state.img_url.length !== 0;

        if(status){
            const formData = new FormData();
            for ( let key in this.state ) {
                formData.append(key, this.state[key]);
            }

            this.props.createNewUser(
                formData
            )
        }
    };

    truncateStr = (str, maxlength = 10) => (str.length > maxlength) ? `${str.slice(0, maxlength - 3)} ... .${str.split('.')[1]}` : str;

    render() {
        const handleForm = () => {
            const { status } = this.props.dataDb;
            if(status === 500){
                const { msg } = this.props.dataDb.data;
                return <Error msg={msg} />
            }else if(status === 400){
                const { msg } = this.props.dataDb.data;
                return <Error msg={msg} />
            }else if(status === 200){
                return <Success/>;
            }else{
                const {name, surname, email, password, img_url } = this.state;
                return(
                    <>
                        <div className="form-block input-group d-flex flex-column mb-2">
                            <label className="form-block__label mb-1" htmlFor="validationDefault01">Name:</label>
                            <input type="text" className="form-block__input form-control rounded" id="validationDefault01"
                                   placeholder="Jon"
                                   onChange={this.onChange}
                                   value={name}
                                   name="name"
                                   pattern="([A-Za-z]){2,}"
                                   title="Must contain only character"
                                   autoFocus required/>
                        </div>

                        <div className="form-block input-group d-flex flex-column mb-2">
                            <label className="form-block__label mb-1" htmlFor="validationDefault02">Surname:</label>
                            <input type="text" className="form-block__input form-control rounded" id="validationDefault02"
                                   placeholder="Dow"
                                   onChange={this.onChange}
                                   value={surname}
                                   name="surname"
                                   pattern="([A-Za-z]){3,}"
                                   title="Must contain only character"
                                   required/>
                        </div>

                        <div className="form-block input-group d-flex flex-column mb-2">
                            <label className="form-block__label mb-1" htmlFor="validationDefault03">email:
                            </label>
                            <input type="text" className="form-block__input form-control rounded" id="validationDefault03"
                                   placeholder="example@gmail.com"
                                   onChange={this.onChange}
                                   value={email}
                                   name="email"
                                   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                   title="Must be in the following order: example@gmail.com"
                                   required/>
                        </div>

                        <div className="form-block input-group mb-4 d-flex flex-column">
                            <label className="form-block__label mb-1" htmlFor="validationDefault04">password:
                                <p className="form-block__text">Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters</p>
                            </label>
                            <input type="password" className="form-block__input form-control rounded" id="validationDefault04"
                                   placeholder="********"
                                   onChange={this.onChange}
                                   value={password}
                                   name="password"
                                   pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                   title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                   required/>
                        </div>

                        <div className="form-block custom-file mb-3">
                            <label className="form-block__label custom-file-label" htmlFor="customFileLangHTML"
                                   data-browse="Upload">
                                <span>{!!img_url ?  this.truncateStr(img_url.name) : 'Upload file'}</span>
                            <input type="file" className="custom-file-input file-path validate" id="customFileLangHTML"
                                   title="Must contain path to your image"
                                   onChange={this.onChange}
                                   name="img_url"/>
                            </label>

                        </div>

                        <button type="submit" className="form-wrap__button btn btn-primary btn-lg btn-block">Sign up</button>

                        <span className="form-wrap__divider my-3">or</span>

                        <a href="http://localhost:3000/" className="form-wrap__link btn btn-secondary btn-lg btn-block"
                           role="button" aria-pressed="true">Log in</a>
                    </>
                )
            }
        };

        return (
            <div className="col-12 col-md-6 d-flex align-items-center">
                <form className="form" onSubmit={this.onSubmit}>
                    <div className="form-wrap rounded">
                        <img className="form__img--size" src={logo} alt="logo"/>
                        {handleForm()}
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {dataDb: store.user.get('dataDb').toJS()}
};

const mapDispatchToProps = (dispatch) => {
    return {createNewUser: (user) => dispatch(addUserToDb(user))};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
