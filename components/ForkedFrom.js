function ForkedFrom({ source }) {
  return (
    <footer className='forked-from'>
      <p className='my-2'>Forked from:</p>
      {/* <h3>{source}</h3> */}
      <a href={source} target='_blank' rel='noopener noreferrer'>
        <h4 className='mb-3'>Original Recipe</h4>
      </a>
    </footer>
  )
}

export default ForkedFrom
