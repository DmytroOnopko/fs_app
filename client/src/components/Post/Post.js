import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPostFromDb} from '../../action/post.action'
import PostItem from './PostItem/PostItem';
import { withRouter } from 'react-router';



class Post extends Component {

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        console.log('post',this.props);
        const {isLoading, posts } = this.props;
        const listPost = posts.map(post => <PostItem key={post._id} post={post}/>);
        return (
            <ul className="card-wrap">
                {isLoading ? <span>Loading...</span> : posts.length ? listPost : <span>Your tape is empty</span>}
            </ul>
        );
    };
}

const mapStateToProps = (store) => {
    return {
        posts: store.post.get('items').toJS(),
        isLoading: store.post.get('isLoading')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => dispatch(getPostFromDb()),
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post))
