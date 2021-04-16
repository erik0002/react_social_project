const SUBMIT_FORM = 'SUBMIT-FORM';
const UPDATE_NEW_FORM_BODY = 'UPDATE-NEW-FORM-BODY';
//const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    FormaPage: {
        UserName: [
            {id: 1, name: "Yeliazar", surname: "Kazhuro", telephone: 375255267285, Usermessage: "Help me, please!"},
            {id: 2, name: "Julia", surname: "Borovskaya", telephone: 3754456788992, Usermessage: "Hi guys! I fine, thanks!"}
        ], 
        newDataFormUser: "",
    }
};

const formaReducer = (state = initialState, action) => {
    switch(action.type) {

        case UPDATE_NEW_FORM_BODY: 
            state.formaDataPage.FormaPage.newDataFormUser = action.body;
            return state;
        case SUBMIT_FORM: 
            let newFormData = {
                id: 5, 
                name: state.newNameDataUser, 
                surname: state.newSurnameDataUser, 
                newUserTelephone: state.newUserMessage, 
                message: state.newUserMessage,
            };

            state.formaDataPage.FormaPage.newDataFormUser = '';
            state.formaDataPage.FormaPage.UserName.push({id: 6, name: "Yeliazar", surname: "Kazhuro", telephone: 375255267285, Usermessage: "Help me, please!"});
            return state;
        default: 
            return state;
    }
}

export const updateNewFormBodyCreator = (text) => ({type: UPDATE_NEW_FORM_BODY, body: text})
export const submitFormActionCreator = () => ({ type: SUBMIT_FORM })

// export const updateNewPostTextActionCreator = (text) =>
//  ({ type: UPDATE_NEW_POST_TEXT, newText: text})

export default formaReducer;