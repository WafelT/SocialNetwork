import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import WriteMessage from './WriteMessage/WriteMessage';

const Dialogs = (props) => {

    // mapping the BLL
    let dialogsDataWrapper = props.dialogsData.map((userData) => {
        return <DialogItem message={userData.message} avatar={userData.avatar}/>
    });

    return (
        <div className={styles.wrapper}>
            {dialogsDataWrapper}
            <WriteMessage addMessage={props.addMessage} />
        </div>
    )
}

export default Dialogs;