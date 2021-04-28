import React from 'react';
import styles from './WriteMessage.module.css';

const WriteMessage = (props) => {
    let newMessageItem = React.createRef();

    let takeMessageData = () => {
        let message = newMessageItem.current.value;
        props.addMessage(message);
        newMessageItem.current.value = '';
    }


    return (
        <form className={styles.wrapper}>
            <input 
                type="text" 
                ref={newMessageItem}
                className={styles.write__message}
                placeholder="Message..." 
                onFocus={(e) => e.target.placeholder = ""}
                onBlur={(e) => e.target.placeholder = "Message..."}
            />
            <button className={styles.button} onClick={ takeMessageData } type="button">Send</button>
        </form>
    );
}

export default WriteMessage;