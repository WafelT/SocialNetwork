import React from 'react';
import styles from './Messages.module.css';
import Dialogs from './Dialogs/Dialogs';
import UserDialogs from './UsersDialogs/UserDialogs';


const Messages = () => {
    return(
        <div className={styles.messages}>
            <UserDialogs />
            <Dialogs />
        </div>
    );
}

export default Messages;