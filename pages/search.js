import { useContext } from "react"
import { AppContext } from "../components/AppContext"
import Layout from "../components/Layout"
import SearchResults from "../components/SearchResults"

const Search = () => {
  const {
    searchText,
    searchResults,
    isSubmitted,
    handleInput,
    handleSubmit,
    clearSearchResults,
  } = useContext(AppContext)

  return (
    <Layout>
      <div className='container text-center mt-4'>
        <form
          id='search-form'
          className='form-group d-flex justify-content-center align-content=center p-0 mx-auto'
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
      <SearchResults
        searchText={searchText}
        searchResults={searchResults}
        isSubmitted={isSubmitted}
      />
    </Layout>
  )
}

export default Search
