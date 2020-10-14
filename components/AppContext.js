import { useState, createContext } from "react"
import { searchByName } from "../lib/themealdbapi"

const AppContext = createContext()

const AppContextProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("")
  const [searchResults, setSearchResults] = useState(null)
  const validRegEx = /^[a-zA-Z]*$/g

  const getSearchResults = async () => {
    const result = await searchByName(searchText)
    setSearchResults(result)
  }

  const handleInput = (e) => {
    e.preventDefault()
    const string = e.target.value
    const validString = string.match(validRegEx)
    validString && setSearchText(validString)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchText && searchText !== "") {
      getSearchResults()
    } else if (searchText === "") {
      clearSearchResults()
    }
  }

  const clearSearchResults = () => {
    setSearchText("")
    setSearchResults(null)
  }

  return (
    <AppContext.Provider
      value={{
        searchText,
        searchResults,
        handleInput,
        handleSubmit,
        clearSearchResults,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContextProvider, AppContext }
