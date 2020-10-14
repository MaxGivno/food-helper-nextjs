import PageSection from "./PageSection"

const SearchResults = ({ searchText, searchResults, isSubmitted }) => {
  if (searchResults) {
    const resultsCount = searchResults.length
    return (
      <PageSection title={`Found: ${resultsCount}`} meals={searchResults} />
    )
  } else if (searchText !== "" && isSubmitted && searchResults === null) {
    return (
      <div className='centered-container' style={{ paddingBottom: "40px" }}>
        <h1 className='text-muted'>Nothing was found</h1>
        <p className='text-center text-muted'>Try to search something else</p>
      </div>
    )
  }

  return (
    <div className='centered-container' style={{ paddingBottom: "40px" }}>
      <h1 className='text-muted'>Search Meals</h1>
      <p className='text-center text-muted'>Try "avocado"</p>
    </div>
  )
}

export default SearchResults
