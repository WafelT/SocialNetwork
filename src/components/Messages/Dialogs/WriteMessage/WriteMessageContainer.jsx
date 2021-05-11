import React from 'react';
import { addMessageActionCreator, changeInputMessageTextActionCreator } from '../../../../redux/messagesReducer';
import WriteMessage from './WriteMessage';

const WriteMessageContainer = (props) => {

    let onAddMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (text) => {
        let action = changeInputMessageTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <WriteMessage changeInputMessageText={ onMessageChange } takeMessageData={ onAddMessage } />
    );
}

export default WriteMessageContainer;