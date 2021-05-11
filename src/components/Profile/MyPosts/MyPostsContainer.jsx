import React from 'react';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    let state = props.store.getState();
    return(
        <MyPosts store={props.store} postData={state.profilePage.postData} />
    );
}

export default MyPostsContainer;