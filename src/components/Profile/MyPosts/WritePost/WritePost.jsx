import React from 'react';
import { addPostActionCreator, changeInputPostTextActionCreator, } from '../../../../redux/profileReducer';
import styles from './WritePost.module.css';

const WritePost = (props) => {
    let newPostItem = React.createRef();

    let takePostData = () => {
        props.dispatch(addPostActionCreator());
        newPostItem.current.value = '';
    }

    let onPostChange = () => {
        let text = newPostItem.current.value;
        props.dispatch(changeInputPostTextActionCreator(text));
    }

    return(
        <div className={styles.wrapper}>
            <h1 className={styles.heading}>Share your thoughts:</h1>
            <form className={styles.form}>
                <textarea 
                    className={styles.textarea}
                    ref={newPostItem}
                    onChange={onPostChange}
                    placeholder="your post..."
                    onFocus={(e) => e.target.placeholder = ""}
                    onBlur={(e) => e.target.placeholder = "your post..."}
                />
                <button className={styles.button} onClick={ takePostData } type="button">Post</button>
            </form>
        </div>
    ); 
}

export default WritePost;