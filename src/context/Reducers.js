export const initialState = {
    thread: [] //{id, person, message}
};

export const sentMsgsReducer = (state, {type , payload}) => {

    switch(type){
        case "ADD_SENT_MSGS":
            return(
               {...state,
                thread: [...state.thread, payload]}
            );

        case "DELETE_SENT_MSG":
            return(
               {...state,
                thread: state.thread.filter((bubble) => bubble.id !== payload) }
            );

        default:
            return;
    }

};
