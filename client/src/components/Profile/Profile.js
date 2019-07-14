import React, {Component} from 'react';
import Header from "../Header/Header";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import {connect} from 'react-redux';
import {getUserFromDb} from '../../action/user.action'

class Profile extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getUser(userId);
    }

    render() {
        let {...user} = this.props.user;
        console.log(user);
        let getCount = (arr) => !!arr ? arr.length : 0;

        return (
            <div>
                <Header/>
                <ProfileHeader login={user.login} name={user.name} surname={user.surname} avatar={user.img_url}
                               postsCount={getCount(user.posts)} readersCount={getCount(user.subscribers_id)} subscribedCount={getCount(user.subscribed_to_id)}/>
                <ProfilePosts/>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        user: store.user.get('items').toJS(),
        isLoading: store.user.get('isLoading')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (id) => dispatch(getUserFromDb(id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
