import React, { createContext, useContext, useReducer, useState } from "react"
import sentMsgsReducer,{ initialState } from "./reducers";


const SentMsgsContext = createContext(initialState);

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(sentMsgsReducer, initialState);

   
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


    const value = {
      allMessages: state.thread,
      addSentMsgs,
      deleteSentMsg,
    }
  return (
    <SentMsgsContext.Provider value={value}>{children}</SentMsgsContext.Provider>
  );
};

const useSentMsgs = () => {
  const context = useContext(SentMsgsContext)

  if(!context){
    throw new Error("useSentMsgs must be used within SentMsgsContext");
  }

  return context;
}

export default useSentMsgs;
