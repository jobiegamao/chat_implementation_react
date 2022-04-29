import React, { createContext, useContext, useReducer, useState } from "react"
import sentMsgsReducer,{ initialState } from "./reducers";


const SentMsgsContext = createContext();

//wrapper in app.js
export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(sentMsgsReducer, initialState);
   
    //functions can be called instead of  calling dispatch in components/pages
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

    //what must be accessed in diff components/pages
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
const useSentMsgsContext = () => {
  const context = useContext(SentMsgsContext)

  if(!context){
    throw new Error("useSentMsgs must be used within SentMsgsContext");
  }

  return context;
}

export default useSentMsgsContext;
