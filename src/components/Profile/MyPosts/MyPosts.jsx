import React from 'react';
import styles from './MyPosts.module.css';
import WritePost from './WritePost/WritePost';
import Post from './Post/Post';

const MyPosts = () => {
    return(
        <div className={styles.wrapper}>
            <WritePost />
            <div className={styles.posts__wrapper}>
                <Post message="The cargo ship was blocked in Suez Canal. I think it will be a real punch for world economy." date="15.03.2021" />
                <Post message="Somebody use twitter? Eww..." date="11.03.2021" />
            </div>
        </div>
    );
}

export default MyPosts;