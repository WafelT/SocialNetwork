const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_INPUT_MESSAGE_TEXT = 'CHANGE-INPUT-MESSAGE-TEXT';

const messagesReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE :
            let newMessage = {
                id : 5,
                message : state.inputMessagesText,
                avatar  : 'https://www.setaswall.com/wp-content/uploads/2017/05/Minimal-Phone-Wallpaper-010-1080x2340-945x2048.jpg',
            }
        
            state.dialogsData.push(newMessage);
            state.inputMessagesText = '';
            return state;
        case CHANGE_INPUT_MESSAGE_TEXT : 
            state.inputMessagesText = action.symbol;
            return state;
        default : 
            return state;
    }
}

export let addMessageActionCreator = () => ({
    type : ADD_MESSAGE,
});

export let changeInputMessageTextActionCreator = (text) => ({
    type : CHANGE_INPUT_MESSAGE_TEXT,
    symbol : text,
});

export default messagesReducer;