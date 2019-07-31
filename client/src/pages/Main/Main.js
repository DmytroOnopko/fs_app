import React, {Component} from 'react';
import './Main.scss'
import Header from '../../components/Header/Header'
import SideBar from '../../components/SideBar';
import Post from '../../components/Post/Post';
import {Redirect} from 'react-router-dom'

class Main extends Component {

    state = {
        tokenIsExist: false,
    };

    componentDidMount() {

        if (!!window.localStorage.getItem('token')) {
            return this.state;
        } else {
            let newState = {...this.state};
            newState.tokenIsExist = true;
            return this.setState(newState)
        }
    }

    render() {
        return (
            <>
                <Header/>
                <section className="main pt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-8">
                                <Post/>
                            </div>
                            <div className="col-12 col-md-4">
                                <SideBar/>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    };
}

export default Main;