import React from 'react';
import StoreContext from '../../../StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    return(
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState(); 

                    return (
                        <Dialogs store={store} dialogsData={state.messagesPage.dialogsData} />
                    );
                }
            }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;