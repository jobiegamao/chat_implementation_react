import React, { createContext, useState } from "react"

export const SentMsgsContext = createContext();

export const ContextProvider = ({children}) => {
    const [msgs, setMsgs] = useState([{id:0, person:0, message:""}]);

  return (
    <SentMsgsContext.Provider value={[msgs, setMsgs]}>{children}</SentMsgsContext.Provider>
  )
}
