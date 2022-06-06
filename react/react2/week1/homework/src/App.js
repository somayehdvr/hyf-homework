import './App.css'
import React, { useContext } from 'react'
import H1Title from './H1Title'
import AppContextProvider from "./AppContextProvider"
import FetchAPI from './FetchAPI'
import BorderComponent from './BorderComponent'

export default function App() {
  const contexts = useContext(AppContextProvider)
  const inputHandler = (input) => {
    contexts.setUser(input.target.value)
    FetchAPI()
  }
  return (
    <div className="App">
      {/* All state should be managed using the context api! */}
      <H1Title title="Github user searcher" />
      <input value={contexts.user} onChange={inputHandler} placeholder="Search for user" />
      {contexts.user?<>
      {/* When the search is loading, show "loading..." */}
      contexts.fetchStatus === "loading" ? <> "loading..."
      </>: contexts.fetchStatus.toLowerCase().includes('error') ? contexts.fetchStatus: 
        <>
          {/* When the search result is empty (no users), you should show "No results..." */}
          {contexts.fetchStatus.total_count === 0 ? "No results..." :
            <>
              {contexts.fetchStatus.items.map(item => {
                return <>
                  <BorderComponent>
                  <a target="_blank" rel="noreferrer" href={item.url}>{item.login}</a>
                  </BorderComponent>
                </>
              })}
            </>
          }
        </>
        </>:<></>
    }
    </div>
  );
}

