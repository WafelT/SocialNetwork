import React from 'react';
import styles from './AboutUser.module.css';

const AboutUser = () => {
    return(
        <div className={styles.wrapper}>
            <img src="https://www.setaswall.com/wp-content/uploads/2017/05/Minimal-Phone-Wallpaper-010-1080x2340-945x2048.jpg" className={styles.image} alt=""/>
            <div className={styles.information}>
                <h1 className={styles.user__name}>Antony McHarren</h1>
                <p className={styles.work, styles.item}>Work: Commercial manager</p>
                <p className={styles.birthday, styles.item}>Date of birth: 2 march 1991</p>
                <p className={styles.hobby, styles.item}>Hobby: golf, painting</p>
                <p className={styles.work, styles.item}>City: Lisbon</p>
            </div>
        </div>
    );
}

export default AboutUser;