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

        // case "DELETE_SENT_MSGS":
        //     console.log("delete",payload)
        //     return(
        //         [
        //             ...state,
        //             {
        //                 person:payload.person, 
        //                 message: payload.message
        //             }
        //         ]
        //     );
        default:
            return;
                 
    }

}

export default sentMsgsReducer;