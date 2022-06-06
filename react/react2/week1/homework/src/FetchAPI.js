import React, { useCallback, useEffect, useContext } from "react"
import AppContextProvider from "./AppContextProvider"

export default function FetchAPI() {
    const contexts = useContext(AppContextProvider)
    const fetchAPI = useCallback(() => {
        return fetch(contexts.API + contexts.user)
            .then(results => results.json())
            .then(data => {
                contexts.setFetchStatus(data)
            })
            //  When the fetch is failed, show "error fetching (reason why it failed)..." 
            .catch(error => {
                contexts.setFetchStatus(error)
                console.error("error fetching " + error)
            })
    }, [])
    useEffect(() => {
        fetchAPI()
    }, [contexts.API])
    return (
        <>
        </>
    )
}