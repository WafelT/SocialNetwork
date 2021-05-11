const ADD_POST = 'ADD-POST';
const CHANGE_INPUT_POST_TEXT = 'CHANGE-INPUT-POST-TEXT';

let initialState = {
    postData : [
        {
            id : 1,
            message : "The cargo ship was blocked in Suez Canal. I think it will be a real punch for world economy.", 
            date : "15.03.2021"
        },
        {
            id : 2,
            message : "Somebody use twitter? Eww...", 
            date : "11.03.2021"
        },
    ],
    inputPostText : '',
};

const profileReducer = (state = initialState, action) => {
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