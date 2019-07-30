import React, {Component} from 'react';
import {getPostFromDb} from "../../action/post.action";
import {connect} from "react-redux";
import { withRouter } from 'react-router';
import Header from "../../pages/Main/Main";
import Post from "../Post/Post";
import SideBar from "../SideBar";
import { Redirect } from 'react-router-dom'

class FilterAuth extends Component {

    state = {
        tokenIsExist: false,
    };

    componentDidMount() {
        this.props.getPostFromDb();
    }

    componentWillReceiveProps(nextProps) {
        let oldProps = this.props;
        if(oldProps.posts !== nextProps.posts){
            if(nextProps.posts.status !== 200){
                return this.state
            }else {
                let newState = {...this.state};
                newState.tokenIsExist = true;
                return this.setState(newState)
            }
        }else {
            return oldProps;
        }
    }

    render() {
        console.log(this.props);
        const {isLoading} = this.props;
        const {posts} = this.props.posts;
        const handleRenderFilterAuth = () => {
            if(!!this.state.tokenIsExist){
                return <Redirect from='/post' to='/login'/>
            }else{
                return (
                    <>
                        <Header/>
                        <section className="main pt-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-md-8">
                                        <Post posts={posts} isLoading={isLoading}/>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <SideBar/>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )
            }
        };
        return (
            <>
                {handleRenderFilterAuth()}
            </>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        posts: store.post.get('items').toJS(),
        isLoading: store.post.get('isLoading')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPostFromDb: () => dispatch(getPostFromDb()),
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FilterAuth))
