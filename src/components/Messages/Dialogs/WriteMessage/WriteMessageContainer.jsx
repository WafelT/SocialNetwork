import React from 'react';
import { addMessageActionCreator, changeInputMessageTextActionCreator } from '../../../../redux/messagesReducer';
import StoreContext from '../../../../StoreContext';
import WriteMessage from './WriteMessage';

const WriteMessageContainer = (props) => {
    return(
        <StoreContext.Consumer>
            {
                (store) => {
                    let onAddMessage = () => {
                        store.dispatch(addMessageActionCreator());
                    };
                
                    let onMessageChange = (text) => {
                        let action = changeInputMessageTextActionCreator(text);
                        store.dispatch(action);
                    }
                
                    return (
                        <WriteMessage changeInputMessageText={ onMessageChange } takeMessageData={ onAddMessage } />
                    );
                }
            }
        </StoreContext.Consumer>
    );
}

export default WriteMessageContainer;