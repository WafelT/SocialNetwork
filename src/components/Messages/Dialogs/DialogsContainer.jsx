import React from 'react';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let state = props.store.getState();

    return (
        <Dialogs store={props.store} dialogsData={state.messagesPage.dialogsData} />
    )
}

export default DialogsContainer;