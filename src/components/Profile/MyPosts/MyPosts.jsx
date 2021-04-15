import React from 'react';
import styles from './MyPosts.module.css';
import WritePost from './WritePost/WritePost';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postDataWrapper = props.postData.map((postData) => {
        return <Post message={postData.message} date={postData.date}/>
    })

    return(
        <div className={styles.wrapper}>
            <WritePost />
            <div className={styles.posts__wrapper}>
                {postDataWrapper}
            </div>
        </div>
    );
}

export default MyPosts;