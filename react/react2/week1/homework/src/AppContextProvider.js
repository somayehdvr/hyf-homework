import React, {createContext, useState} from "react";

export const AppContext = createContext()

export default function AppContextProvider({children}) {
    const [fetchStatus, setFetchStatus] = useState("loading")
    const [user, setUser] = useState("")
    const API = "https://api.github.com/search/users?q="

    const contextValues = {
        fetchStatus, setFetchStatus,
        user, setUser,
        API
    }
    
    return (
        <AppContext.Provider value={contextValues}>
            {children}
        </AppContext.Provider>
    )
}
