import React from 'react';
import styles from './Messages.module.css';
import Dialogs from './Dialogs/Dialogs';
import UserDialogs from './UsersDialogs/UserDialogs';


const Messages = (props) => {

    return(
        <div className={styles.messages}>
            <UserDialogs usersData={props.usersData} />
            <Dialogs dialogsData={props.dialogsData} />
        </div>
    );
}

export default Messages;