import './App.css';
import React, { useCallback, useEffect, useState, createContext } from 'react';
import H1Title from './H1Title'

export const AppContext = createContext(null)

export default function App() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState("")
  const [user, setUser] = useState("SomayehDvr")
  const [API, setAPI] = useState("https://api.github.com/search/users?q=SomayehDvr")
  const inputHandler = (input) => {
    setUser(input.target.value)
    setAPI("https://api.github.com/search/users?q=" + user )
  }
  const fetchAPI = useCallback(() => {
    return fetch(API)
      .then(results => results.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
      //  When the search is failed, you should show "error fetching (reason why it failed)..." 
      .catch(error => console.error("error fetching " + error))
  }, [API])
  useEffect(() => {
    fetchAPI()
  }, [fetchAPI])
  const title = "Github user searcher"
  const AppValues = [title]
  return (
    <div className="App">
      {/* All state should be managed using the context api! */}
      <AppContext.Provider value={AppValues}>
      <H1Title /> 
      {/* When the search is loading, show "loading..." */}
      {loading ? "loading..." : 
        <>
          <input value={user} onChange={inputHandler} placeholder="Search for user" /><br />
          {/* When the search result is empty (no users), you should show "No results..." */}
          {data.total_count === 0 ? "No results..." :
            <>
              {data.items.map(item => {
                return <><a target="_blank" rel="noreferrer" href={item.url}>{item.login}</a><br /></>
              })}
            </>
          }
        </>
      }
      
    
      </AppContext.Provider>
    </div>
  );
}

