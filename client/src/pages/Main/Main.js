import React from 'react';
import './Main.scss'
import Header from '../../components/Header/Header'
import SideBar from '../../components/SideBar';
import Post from '../../components/Post/Post';
import FilterAuth from "../../components/FilterAuth/FilterAuth";

const main = () => {
    return (
        <FilterAuth/>
    );
};

export default main;

// import React, {Component} from 'react';
// import './Main.scss'
// import { Redirect } from 'react-router-dom'
// import FilterAuth from "../../components/FilterAuth/FilterAuth";
//
// class Main extends Component {
//
//     state = {
//         auth: false,
//     };
//
//     componentDidMount(){
//         if(!!window.localStorage.getItem('token')){
//             return this.state;
//         }else {
//             let newState = {...this.state};
//             newState.tokenIsExist = true;
//             return this.setState(newState)
//         }
//     }
//
//     render() {
//         console.log(this);
//         const handleRenderMain = () => {
//             if(!!this.state.tokenIsExist){
//                 return <Redirect from='/post' to='/login'/>
//             }else{
//                 return (
//                     <FilterAuth/>
//                 )
//             }
//         };
//         return (
//             <>{handleRenderMain()}</>
//         );
//     }
// }
//
// export default Main;