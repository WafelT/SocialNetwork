import React from 'react';
import styles from './Dialogs.module.css';

const Dialog = (props) => {
    return(
        <div className={styles.item}>
            <img className={styles.user__image} src="https://www.setaswall.com/wp-content/uploads/2017/05/Minimal-Phone-Wallpaper-010-1080x2340-945x2048.jpg" alt=""/>
            <p className={styles.message}>
                {props.message}
            </p>
        </div>
    )
}

const Dialogs = () => {
    return(
        <div className={styles.wrapper}>
            <Dialog message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"/>
            <Dialog message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"/>
            <Dialog message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"/>
            <Dialog message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"/>
        </div>
    )
}

export default Dialogs;