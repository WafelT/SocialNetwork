const ADD_POST = 'ADD-POST';
const CHANGE_INPUT_POST_TEXT = 'CHANGE-INPUT-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type){
        case ADD_POST :
            let newPost = {
                message : state.inputPostText, 
                date : "15.03.2021",
            }
        
            state.postData.push(newPost);
            state.inputPostText = '';
            return state;
        case CHANGE_INPUT_POST_TEXT :
            state.inputPostText = action.symbol;
            return state;
        default :
            return state;
    }
}

export let addPostActionCreator = () => ({
    type : ADD_POST,
});

export let changeInputPostTextActionCreator = (text) => ({
    type : CHANGE_INPUT_POST_TEXT,
    symbol : text,
});

export default profileReducer;