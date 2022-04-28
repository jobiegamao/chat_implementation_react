export const initialState = {
    thread: []
};

const sentMsgsReducer = (state, action) => {
    const {type , payload} = action;

    switch(type){
        case "ADD_SENT_MSGS":
            console.log('added',payload)
            return(
               {
                   ...state,
                   thread: payload.thread
               }
            );
        default:
            return;
                 
    }

}

export default sentMsgsReducer;