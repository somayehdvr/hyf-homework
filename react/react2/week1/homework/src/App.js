import './App.css';
import React, {useCallback, useEffect, useState} from 'react';

function App() {
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
  return (
    <div className="App">
      <h1> Github user searcher </h1>
      {/* When the search is loading, show "loading..." */}
      {loading ? "Loading" : 
        <>
          <input value={user} onChange={inputHandler} placeholder="Search for user" />
          {/* When the search result is empty (no users), you should show "No results..." */}
          {data.total_count === 0 ? "No results..." :
            <>
              {data.items.map(item => {
                return item.login + item.url
              })}
            </>
          }
        </>
      }
      
     
      {/* All state should be managed using the context api! */}
    </div>
  );
}

export default App;
