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

    renderInput = (labelText, classNameInput, typeInput, placeholderInput, valueInput, nameInput, titleInput,autoFocus) => {
        return(
            <>
                <label className="form-block__label mb-1" htmlFor="validationDefault01">{labelText}</label>
                <input type={typeInput} className={classNameInput} id="validationDefault01"
                       placeholder={placeholderInput}
                       onChange={this.onChange}
                       value={valueInput}
                       name={nameInput}
                       title={titleInput}
                       required/>
            </>
        )
    };

    handleStrError = (nameInput) => {
        const { name, surname, email, password } = this.state;

        const regExpName = "([A-Za-z]){3,}$";
        const regExpEmail = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$";
        const regExpPassword = "(?=.*)(?=.*[a-z])(?=.*[A-Z]).{8,}";

        const defaultClassName = 'form-block__input form-control rounded';
        const errorClassName = 'form-block__input-error-str';
        const successClassName = 'form-block__input-success-str';
        const typeInput = 'text';

        if(nameInput === 'name'){

            const labelText = 'Name:';
            const placeholderInput  = 'Jon';
            const nameInput = 'name';
            const titleInput = 'Must contain only character';

            if(name.length === 0){
                return this.renderInput( labelText, defaultClassName, typeInput, placeholderInput, name, nameInput, titleInput)
            }else if(!name.match(regExpName)){
                return this.renderInput(labelText,`${defaultClassName} ${errorClassName}`, typeInput, placeholderInput, name, nameInput, titleInput)
            }else {
                return this.renderInput(labelText,`${defaultClassName} ${successClassName}`, typeInput, placeholderInput, name, nameInput, titleInput)
            }
        }else if(nameInput === 'surname'){

            const labelText = 'Surname:';
            const placeholderInput  = 'Dow';
            const nameInput = 'surname';
            const titleInput = 'Must contain only character';

            if(surname.length === 0){
                return this.renderInput( labelText, defaultClassName, typeInput, placeholderInput, surname, nameInput, titleInput)
            }else if(!surname.match(regExpName)){
                return this.renderInput(labelText,`${defaultClassName} ${errorClassName}`,  typeInput, placeholderInput, surname, nameInput, titleInput)
            }else {
                return this.renderInput(labelText, `${defaultClassName} ${successClassName}`,  typeInput, placeholderInput, surname, nameInput, titleInput)
            }
        }else if(nameInput === 'email'){

            const labelText = 'email:';
            const placeholderInput  = 'example@gmail.com';
            const nameInput = 'email';
            const titleInput = 'Must be in the following order: example@gmail.com';

            if(email.length === 0){
                return this.renderInput( labelText, defaultClassName, typeInput, placeholderInput, email, nameInput, titleInput)
            }else if(!email.match(regExpEmail)){
                return this.renderInput(labelText,`${defaultClassName} ${errorClassName}`, typeInput, placeholderInput, email, nameInput, titleInput)
            }else {
                return this.renderInput(labelText,`${defaultClassName} ${successClassName}`,  typeInput, placeholderInput, email, nameInput, titleInput)
            }
        }else if(nameInput === 'password'){

            const labelText =  <>password:<p className="form-block__text">Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters</p></>
            const placeholderInput  = '********';
            const nameInput = 'password';
            const titleInput = 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters';

            if(password.length === 0){
                return this.renderInput( labelText, defaultClassName,typeInput, placeholderInput, password, nameInput, titleInput)
            }else if(!password.match(regExpPassword)){
                return this.renderInput(labelText,`${defaultClassName} ${errorClassName}`,  typeInput, placeholderInput, password, nameInput, titleInput)
            }else {
                return this.renderInput(labelText,`${defaultClassName} ${successClassName}`,  typeInput, placeholderInput, password, nameInput, titleInput)
            }
        }
    };

    truncateStr = (str, maxlength = 10) => (str.length > maxlength) ? `${str.slice(0, maxlength - 3)} ... .${str.split('.')[1]}` : str;

    renderInputUploadFile = (className, msg = '') => {
        const {img_url} = this.state;
        return(
            <label className={className} htmlFor="customFileLangHTML"
                   data-browse="Upload">
                <span className="form-block__span">{!!img_url ?  `${this.truncateStr(img_url.name)}${msg}` : 'Upload file'}</span>
                <input type="file" className="custom-file-input file-path validate" id="customFileLangHTML"
                       title="Must contain path to your image"
                       onChange={this.onChange}
                       name="img_url"/>
            </label>
        )
    };

    handleImgError = () => {
        const {img_url} = this.state;
        if(img_url.length === 0) {
            return this.renderInputUploadFile('form-block__label form-block__label-default custom-file-label')
        }else if(img_url.size > 1024*1024*5){
            return this.renderInputUploadFile('form-block__label form-block__label-error-size custom-file-label', '-[SIZE ERROR]')
        }else if(img_url.type !== 'image/jpeg' && img_url.type !== 'image/png'){
            return this.renderInputUploadFile('form-block__label form-block__label-error-type custom-file-label', '-[TYPE ERROR]')
        }else {
            return this.renderInputUploadFile('form-block__label form-block__label-success custom-file-label')
        }
    };

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
                return(
                    <>
                        <div className="form-block input-group d-flex flex-column mb-2">
                            {this.handleStrError('name')}
                        </div>

                        <div className="form-block input-group d-flex flex-column mb-2">
                            {this.handleStrError('surname')}
                        </div>

                        <div className="form-block input-group d-flex flex-column mb-2">
                            {this.handleStrError('email')}
                        </div>

                        <div className="form-block input-group mb-4 d-flex flex-column">
                            {this.handleStrError('password')}
                        </div>

                        <div className="form-block custom-file mb-3">
                            {this.handleImgError()}
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
