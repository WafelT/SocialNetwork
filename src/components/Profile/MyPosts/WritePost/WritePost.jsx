import React from 'react';
import styles from './WritePost.module.css';

const WritePost = () => {
    return(
        <div className={styles.wrapper}>
            <h1 className={styles.heading}>Share your thoughts:</h1>
            <form className={styles.form}>
                <textarea className={styles.textarea} placeholder="your post..."></textarea>
                <button className={styles.button} type="button">Post</button>
            </form>
        </div>
    ); 
}

export default WritePost;