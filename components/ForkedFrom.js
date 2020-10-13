function ForkedFrom({ source }) {
  return (
    <footer className='forked-from'>
      {/* <p className='my-2'>Forked from:</p> */}
      <a href={source} target='_blank' rel='noopener noreferrer'>
        <h4 className='my-3'>See original recipe</h4>
      </a>
    </footer>
  )
}

export default ForkedFrom
