import PageSection from "./PageSection"

const SearchResults = ({ results }) => {
  if (!results)
    return (
      <div className='centered-container' style={{ paddingBottom: "40px" }}>
        <h1 className='text-muted'>Nothing was found</h1>
        <p className='text-center text-muted'>Try to search something else</p>
      </div>
    )
  const resultsCount = results.length

  return <PageSection title={`Found: ${resultsCount}`} meals={results} />
}

export default SearchResults
