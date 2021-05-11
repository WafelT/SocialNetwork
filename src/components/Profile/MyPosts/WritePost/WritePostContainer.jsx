import React from 'react';
import WritePost from './WritePost';
import { addPostActionCreator, changeInputPostTextActionCreator, } from '../../../../redux/profileReducer';

const WritePostContainer = (props) => {

    let takePostData = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = changeInputPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return(
        <WritePost changeInputPostText={ onPostChange } addPost={ takePostData } />
    ); 
}

export default WritePostContainer;