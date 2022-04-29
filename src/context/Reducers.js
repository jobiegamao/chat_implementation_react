export const initialState = {
    thread: [] //{id, person, message}
};

const sentMsgsReducer = (state, action) => {
    const {type , payload} = action;

    switch(type){
        case "ADD_SENT_MSGS":
            console.log('added',payload)
            return(
               {...state,
                thread: [...state.thread, payload]}
            );

        case "DELETE_SENT_MSG":
            console.log('deleted',payload)
            return(
               {...state,
                thread: state.thread.filter((bubble) => bubble.id !== payload) }
            );

        default:
            return;
                 
    }

}

export default sentMsgsReducer;