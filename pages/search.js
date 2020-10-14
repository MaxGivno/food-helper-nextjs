import { useState, useEffect } from "react"
import Layout from "../components/Layout"
import SearchResults from "../components/SearchResults"
import { searchByName } from "../lib/themealdbapi"

const Search = ({ searchString }) => {
  const [searchText, setSearchText] = useState("")
  const [searchResults, setSearchResults] = useState(null)
  const validRegEx = /^[a-zA-Z]*$/g

  useEffect(() => {
    searchString && setSearchText(searchString.match(validRegEx))
    if (searchText && searchText !== "") {
      getSearchResults()
    }
  }, [])

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
      console.log(searchText)
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
    <Layout>
      <div className='container text-center mt-4'>
        <form
          id='search-form'
          className='form-group d-flex justify-content-center align-content=center col-4 p-0 mx-auto'
          onSubmit={handleSubmit}
        >
          <input
            className='form-control'
            type='text'
            name='search'
            id='search'
            placeholder='Search by meal name...'
            value={searchText}
            onChange={handleInput}
          />
          <button id='search-clear' onClick={clearSearchResults} type='reset'>
            &times;
          </button>
        </form>
      </div>
      <SearchResults results={searchResults} />
    </Layout>
  )
}

export default Search
