import React from 'react';
import AboutUser from './AboutUser/AboutUser';
import HeaderImage from './HeaderImage/HeaderImage';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';

const Profile = (props) => {
    return(
        <div>
            <HeaderImage />
            <AboutUser />
            <MyPosts addPost={props.addPost} changeInputPostText={props.changeInputPostText} postData={props.profilePage.postData} />
        </div>
    );
}

export default Profile;