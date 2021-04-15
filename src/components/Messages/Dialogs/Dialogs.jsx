import React from 'react';
import styles from './Dialogs.module.css';

const Dialog = (props) => {
    return(
        <div className={styles.item}>
            <img className={styles.user__image} src={props.avatar} alt="image__avatar"/>
            <p className={styles.message}>
                {props.message}
            </p>
        </div>
    )
}

const Dialogs = (props) => {

    // mapping the BLL
    let dialogsDataWrapper = props.dialogsData.map((userData) => {
        return <Dialog message={userData.message} avatar={userData.avatar}/>
    });

    return(
        <div className={styles.wrapper}>
            {dialogsDataWrapper}
        </div>
    )
}

export default Dialogs;