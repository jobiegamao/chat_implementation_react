import React, { createContext, useContext, useReducer } from "react"
import { sentMsgsReducer, initialState } from "./reducers";


const SentMsgsContext = createContext();

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(sentMsgsReducer, initialState);
   
    //functions can be called instead of  calling dispatch in components/pages
    // ACTIONS
    const addSentMsgs = (bubble) => {
      dispatch({
        type: "ADD_SENT_MSGS",
        payload: bubble
      })
    }
    const deleteSentMsg = (bubbleID) => {
      dispatch({
        type: "DELETE_SENT_MSG",
        payload: bubbleID
      })
    }

    //what must be accessed in diff components/pages || ACTIONS
    const value = {
      allMessages: state.thread,
      addSentMsgs,
      deleteSentMsg,
    }
  return (
    <SentMsgsContext.Provider value={value}>{children}</SentMsgsContext.Provider>
  );
};

// what needs to be called in components/pages
export const useSentMsgsContext = () => {
  return useContext(SentMsgsContext);
};



