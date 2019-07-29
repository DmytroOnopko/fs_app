import React, {Component} from 'react';
import {addUserToDb} from '../../action/user.action';
import {connect} from 'react-redux';
import Success from "../Message/Success/Success";
import Error from "../Message/Error/Error";
import logo from '../Header/img/logo.svg.png'
import './signUp.scss';
import ActionAuth from "../ActionAuth";

class SignUp extends Component {

    state = {
        user:{
            name: '',
            surname: '',
            email: '',
            password: '',
            img_url: '',
            subscribers_id: [],
            subscribed_to_id: [],
            posts: [],
        },
        show: false,
    };

    onChangeSignUp = (e) => {
        let newState = {...this.state};
        switch (e.target.name) {
            case 'img_url':
                newState.user.img_url = e.target.files[0];
                break;
            default:
                newState.user[e.target.name] = e.target.value;
        }
        this.setState(newState);
    };

    onClickSignUp = () => {
        let newState = {...this.state};
        newState.show = false;
        this.setState(newState);
    };

    onSubmitSignUp = (e) => {
        e.preventDefault();
        const status = this.state.user.name.length !== 0 &&
            this.state.user.surname.length !== 0 &&
            this.state.user.email.length !== 0 &&
            this.state.user.password.length !== 0 &&
            this.state.user.img_url.length !== 0;
        if(status){
            const formData = new FormData();
            for ( let key in this.state.user ) {
                formData.append(key, this.state.user[key]);
            }
            this.props.createNewUser(
                formData
            );
            this.clearStateSignUp();
        }
    };

    clearStateSignUp = () =>{
        let newState = {...this.state};
        newState.user.name = '';
        newState.user.surname = '';
        newState.user.email = '';
        newState.user.password = '';
        newState.user.img_url = '';
        newState.show = true;
        return this.setState(newState);
    };


    renderInputSignUp = (labelText, classNameInput, typeInput, placeholderInput, valueInput, nameInput, titleInput) => {
        return(
            <>
                <label className="form-block__label mb-1" htmlFor="validationDefault01">{labelText}</label>
                <input type={typeInput} className={classNameInput} id="validationDefault01"
                       placeholder={placeholderInput}
                       onChange={this.onChangeSignUp}
                       value={valueInput}
                       name={nameInput}
                       title={titleInput}
                       required/>
            </>
        )
    };

    handleInputSignUp = (nameInput) => {
        const { name, surname, email, password } = this.state.user;

        const regExpName = "([A-Za-z]){3,}$";
        const regExpEmail = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$";
        const regExpPassword = "(?=.*)(?=.*[a-z])(?=.*[A-Z]).{8,}";

        const defaultClassName = 'form-block__input form-control rounded';
        const errorClassName = 'form-block__input-error-str';
        const successClassName = 'form-block__input-success-str';
        const typeInput = 'text';

        if(nameInput === 'name'){

            const labelText = 'Name:';
            const placeholderInput  = 'John';
            const nameInput = 'name';
            const titleInput = 'Must contain only character';

            if(name.length === 0){
                return this.renderInputSignUp( labelText, defaultClassName, typeInput, placeholderInput, name, nameInput, titleInput)
            }else if(!name.match(regExpName)){
                return this.renderInputSignUp(labelText,`${defaultClassName} ${errorClassName}`, typeInput, placeholderInput, name, nameInput, titleInput)
            }else {
                return this.renderInputSignUp(labelText,`${defaultClassName} ${successClassName}`, typeInput, placeholderInput, name, nameInput, titleInput)
            }
        }else if(nameInput === 'surname'){

            const labelText = 'Surname:';
            const placeholderInput  = 'Doe';
            const nameInput = 'surname';
            const titleInput = 'Must contain only character';

            if(surname.length === 0){
                return this.renderInputSignUp( labelText, defaultClassName, typeInput, placeholderInput, surname, nameInput, titleInput)
            }else if(!surname.match(regExpName)){
                return this.renderInputSignUp(labelText,`${defaultClassName} ${errorClassName}`,  typeInput, placeholderInput, surname, nameInput, titleInput)
            }else {
                return this.renderInputSignUp(labelText, `${defaultClassName} ${successClassName}`,  typeInput, placeholderInput, surname, nameInput, titleInput)
            }
        }else if(nameInput === 'email'){

            const labelText = 'email:';
            const placeholderInput  = 'example@gmail.com';
            const nameInput = 'email';
            const titleInput = 'Must be in the following order: example@gmail.com';

            if(email.length === 0){
                return this.renderInputSignUp( labelText, defaultClassName, typeInput, placeholderInput, email, nameInput, titleInput)
            }else if(!email.match(regExpEmail)){
                return this.renderInputSignUp(labelText,`${defaultClassName} ${errorClassName}`, typeInput, placeholderInput, email, nameInput, titleInput)
            }else {
                return this.renderInputSignUp(labelText,`${defaultClassName} ${successClassName}`,  typeInput, placeholderInput, email, nameInput, titleInput)
            }
        }else if(nameInput === 'password'){

            const labelText =  <>password:<p className="form-block__text">Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters</p></>
            const placeholderInput  = '********';
            const nameInput = 'password';
            const titleInput = 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters';

            if(password.length === 0){
                return this.renderInputSignUp( labelText, defaultClassName,typeInput, placeholderInput, password, nameInput, titleInput)
            }else if(!password.match(regExpPassword)){
                return this.renderInputSignUp(labelText,`${defaultClassName} ${errorClassName}`,  typeInput, placeholderInput, password, nameInput, titleInput)
            }else {
                return this.renderInputSignUp(labelText,`${defaultClassName} ${successClassName}`,  typeInput, placeholderInput, password, nameInput, titleInput)
            }
        }
    };

    truncateStr = (str, maxlength = 10) => (str.length > maxlength) ? `${str.slice(0, maxlength - 3)} ... .${str.split('.')[1]}` : str;

    renderInputUploadFileSignUp = (className, msg = '') => {
        const {img_url} = this.state.user;
        return(
            <label className={className} htmlFor="customFileLangHTML"
                   data-browse="Upload">
                <span className="form-block__span">{!!img_url ?  `${this.truncateStr(img_url.name)}${msg}` : 'Upload file'}</span>
                <input type="file" className="custom-file-input file-path validate" id="customFileLangHTML"
                       title="Must contain path to your image"
                       onChange={this.onChangeSignUp}
                       name="img_url"/>
            </label>
        )
    };

    handleInputUploadFileSignUp = () => {
        const {img_url} = this.state.user;
        if(img_url.length === 0) {
            return this.renderInputUploadFileSignUp('form-block__label form-block__label-default custom-file-label')
        }else if(img_url.size > 1024*1024*5){
            return this.renderInputUploadFileSignUp('form-block__label form-block__label-error-size custom-file-label', '-[SIZE ERROR]')
        }else if(img_url.type !== 'image/jpeg' && img_url.type !== 'image/png'){
            return this.renderInputUploadFileSignUp('form-block__label form-block__label-error-type custom-file-label', '-[TYPE ERROR]')
        }else {
            return this.renderInputUploadFileSignUp('form-block__label form-block__label-success custom-file-label')
        }
    };

    render() {
        const renderFormSignUp = () => {
            return(
                <>
                    <div className="form-block input-group d-flex flex-column mb-2">
                        {this.handleInputSignUp('name')}
                    </div>

                    <div className="form-block input-group d-flex flex-column mb-2">
                        {this.handleInputSignUp('surname')}
                    </div>

                    <div className="form-block input-group d-flex flex-column mb-2">
                        {this.handleInputSignUp('email')}
                    </div>

                    <div className="form-block input-group mb-4 d-flex flex-column">
                        {this.handleInputSignUp('password')}
                    </div>

                    <div className="form-block custom-file mb-3">
                        {this.handleInputUploadFileSignUp()}
                    </div>

                    <ActionAuth buttonText={'Sign Up'} link={'/login'} linkText={'Log in'} onClick={this.onClickSignUp}/>

                </>
            );
        };

        const handlerFormSignUp = () =>{
            if(this.state.show){
                const { status } = this.props.dataDb;
                if(status === 500){
                    const { msg } = this.props.dataDb.data;
                    return (
                        <>
                            <Error msg={msg}/>
                            {renderFormSignUp()}
                        </>
                    )
                }else if(status === 400){
                    const { msg } = this.props.dataDb.data;
                    return (
                        <>
                            <Error msg={msg}/>
                            {renderFormSignUp()}
                        </>
                    )
                }else if(status === 200){
                    return(
                        <>
                            <Success/>
                            {renderFormSignUp()}
                        </>
                    )
                }
            }else{
                return renderFormSignUp()
            }
        };

        return (
            <div className="col-md-6 d-flex align-items-center">
                <form className="form" onSubmit={this.onSubmitSignUp}>
                    <div className="form-wrap rounded">
                        <img className="form__img--size" src={logo} alt="logo"/>
                        {handlerFormSignUp()}
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
