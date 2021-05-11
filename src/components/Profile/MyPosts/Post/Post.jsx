import React from 'react';
import styles from './Post.module.css';


const Post = (props) => {
    return(
        <div className={styles.post}>
            <div className={styles.wrapper}>
                <img className={styles.image} src="https://www.setaswall.com/wp-content/uploads/2017/05/Minimal-Phone-Wallpaper-010-1080x2340-945x2048.jpg" alt="ava"/>
                <div className={styles.information}>
                    <h1 className={styles.user}>Antony McHarren</h1>
                    <time className={styles.date}>{props.date}</time>
                </div>
            </div>
            <div className={styles.post__message}>
                {props.message}
            </div>
        </div>
    );
}

export default Post;