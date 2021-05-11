import React from 'react';
import AboutUser from './AboutUser/AboutUser';
import HeaderImage from './HeaderImage/HeaderImage';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return(
        <div>
            <HeaderImage />
            <AboutUser />
            <MyPostsContainer store={props.store} />
        </div>
    );
}

export default Profile;