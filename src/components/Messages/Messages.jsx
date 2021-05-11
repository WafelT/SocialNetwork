import React from 'react';
import styles from './Messages.module.css';
import Dialogs from './Dialogs/Dialogs';
import UserDialogs from './UsersDialogs/UserDialogs';
import DialogsContainer from './Dialogs/DialogsContainer';


const Messages = (props) => {

    let state = props.store.getState();

    return(
        <div className={styles.messages}>
            <UserDialogs usersData={state.messagesPage.usersData} />
            <DialogsContainer store={props.store} />
        </div>
    );
}

export default Messages;