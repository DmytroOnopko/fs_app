import React, {Component} from 'react';
import {connect} from "react-redux";
import {checkUserFromDb} from "../../action/user.action";
import { Redirect } from 'react-router-dom'
import logo from "../Header/img/logo.svg.png";
import Error from "../Message/Error/Error";
import ActionAuth from "../ActionAuth";
import { withRouter } from 'react-router';


class LogIn extends Component {

    state = {
        user: {
            email: '',
            password: '',
        },
        show: false,
        redirectToNewPage: false
    };

    onChangeLogIn = (e) => {
        let newState = {...this.state};
        newState.user[e.target.name] = e.target.value;
        this.setState(newState);
    };

    onClickLogIn = () => {
        let newState = {...this.state};
        newState.show = false;
        this.setState(newState);
    };

    onSubmitLogIn = (e) => {
        e.preventDefault();
        const status = this.state.user.email.length !== 0 && this.state.user.password.length !== 0;
        if(status){
            this.props.checkUser(
                {...this.state.user}
            );
            let newState = {...this.state};
            newState.show = true;
            this.setState(newState);
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
        const { email, password } = this.state.user;

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

    test = () => {
        console.log('test',this);
        if(this.props.checkedDataDb.status === 200){
            return this.setState({ redirectToNewPage: true })
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

                        <ActionAuth buttonText={'Log in'} link={'/'} linkText={'Sign Up'} onClick={this.onClickLogIn}/>

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

                        <Redirect from='/login' to='/post'/>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogIn));