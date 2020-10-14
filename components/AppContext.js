import { useState, createContext } from "react"
import { searchByName } from "../lib/themealdbapi"

const AppContext = createContext()

const AppContextProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("")
  const [searchResults, setSearchResults] = useState(undefined)
  const [isSubmitted, setIsSubmitted] = useState(false)
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
    setIsSubmitted(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const searchField = document.querySelector("#search")
    if (searchText && searchText !== "") {
      searchField && searchField.blur()
      searchResults && setSearchResults(undefined)
      getSearchResults()
      setIsSubmitted(true)
    } else if (searchText === "") {
      clearSearchResults()
      setIsSubmitted(false)
    }
  }

  const clearSearchResults = () => {
    setSearchText("")
    setSearchResults(undefined)
    setIsSubmitted(false)
  }

  return (
    <AppContext.Provider
      value={{
        searchText,
        searchResults,
        isSubmitted,
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
