import React, {Component} from 'react';
import {connect} from "react-redux";
import {checkUserFromDb} from "../../action/user.action";
import Success from "../Message/Success/Success";
import logo from "../Header/img/logo.svg.png";
import Error from "../Message/Error/Error";
import Action from "../Action";

class LogIn extends Component {

    state = {
        email: '',
        password: '',
        show: false,
    };

    onChangeLogIn = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onClickLogIn = () => {
        this.setState({
            show: false,
        });
    };

    onSubmitLogIn = (e) => {
        e.preventDefault();
        const status = this.state.email.length !== 0 && this.state.password.length !== 0;
        if(status){
            this.props.checkUser(
                this.state
            );
            return this.setState({
                email: '',
                password: '',
                show: true,
            });
        }
    };

    renderInputLogIn = (labelText, classNameInput, typeInput, placeholderInput, valueInput, nameInput, titleInput) => {
        return(
            <>
                <label className="form-block__label mb-1" htmlFor="validationDefault01">{labelText}</label>
                <input type={typeInput} className={classNameInput} id="validationDefault01"
                       placeholder={placeholderInput}
                       onChange={this.onChangeLogIn}
                       value={valueInput}
                       name={nameInput}
                       title={titleInput}
                       required/>
            </>
        )
    };

    handleInputLogIn = (nameInput) => {
        const { email, password } = this.state;

        const regExpEmail = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$";
        const regExpPassword = "(?=.*)(?=.*[a-z])(?=.*[A-Z]).{8,}";

        const defaultClassName = 'form-block__input form-control rounded';
        const errorClassName = 'form-block__input-error-str';
        const successClassName = 'form-block__input-success-str';
        const typeInput = 'text';

        if(nameInput === 'email'){

            const labelText = 'email:';
            const placeholderInput  = 'example@gmail.com';
            const nameInput = 'email';
            const titleInput = 'Must be in the following order: example@gmail.com';

            if(email.length === 0){
                return this.renderInputLogIn( labelText, defaultClassName, typeInput, placeholderInput, email, nameInput, titleInput)
            }else if(!email.match(regExpEmail)){
                return this.renderInputLogIn(labelText,`${defaultClassName} ${errorClassName}`, typeInput, placeholderInput, email, nameInput, titleInput)
            }else {
                return this.renderInputLogIn(labelText,`${defaultClassName} ${successClassName}`,  typeInput, placeholderInput, email, nameInput, titleInput)
            }
        }else if(nameInput === 'password'){

            const labelText =  'password:';
            const placeholderInput  = '********';
            const nameInput = 'password';
            const titleInput = 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters';

            if(password.length === 0){
                return this.renderInputLogIn( labelText, defaultClassName,typeInput, placeholderInput, password, nameInput, titleInput)
            }else if(!password.match(regExpPassword)){
                return this.renderInputLogIn(labelText,`${defaultClassName} ${errorClassName}`,  typeInput, placeholderInput, password, nameInput, titleInput)
            }else {
                return this.renderInputLogIn(labelText,`${defaultClassName} ${successClassName}`,  typeInput, placeholderInput, password, nameInput, titleInput)
            }
        }
    };

    render() {
        const renderFormLogIn = () => {
            return(
                    <>
                        <div className="form-block input-group d-flex flex-column mb-2">
                            {this.handleInputLogIn('email')}
                        </div>

                        <div className="form-block input-group mb-4 d-flex flex-column">
                            {this.handleInputLogIn('password')}
                        </div>

                        <Action buttonText={'Log in'} link={'/'} linkText={'Sign Up'} onClick={this.onClickLogIn}/>

                    </>
                )
        };
        const handleFormLogIn = () =>{
            if(this.state.show){
                const { status } = this.props.checkedDataDb;
                if(status === 500){
                    const { msg } = this.props.checkedDataDb.data;
                    return(
                        <>
                            <Error msg={msg}/>
                            {renderFormLogIn()}
                        </>
                    );
                }else if(status === 400){
                    const { msg } = this.props.checkedDataDb.data;
                    return(
                        <>
                            <Error msg={msg}/>
                            {renderFormLogIn()}
                        </>

                    );
                }else if(status === 200){
                    return(
                        <>
                            <Success/>
                            {renderFormLogIn()}
                        </>
                    );
                }
            }else{
                return renderFormLogIn();
            }
        };


        return (
            <div className="col-md-6 d-flex align-items-center">
                <form className="form" onSubmit={this.onSubmitLogIn}>
                    <div className="form-wrap rounded">
                        <img className="form__img--size" src={logo} alt="logo"/>
                        {handleFormLogIn()}
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {checkedDataDb: store.user.get('checkedDataDb').toJS()}
};git

const mapDispatchToProps = (dispatch) => {

    return {checkUser: (user) => dispatch(checkUserFromDb(user))};
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);