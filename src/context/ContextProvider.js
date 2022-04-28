import React, { createContext, useContext, useReducer, useState } from "react"
import sentMsgsReducer,{ initialState } from "./reducers";


const SentMsgsContext = createContext(initialState);

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(sentMsgsReducer, initialState);

    //reducer's switch to function

    const addSentMsgs = (bubble) => {
      const updatedSentMsgs = state.thread.concat(bubble)

      dispatch({
        type: "ADD_SENT_MSGS",
        payload: {
          thread: updatedSentMsgs
        }
      })
    }

    const value = {
      allMessages: state.thread,
      total: state.length,
      addSentMsgs
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
