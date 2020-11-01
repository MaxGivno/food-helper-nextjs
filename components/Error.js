const Error = ({ error }) => {
  return (
    <div className='centered-container'>
      <div className='card border-danger mb-3' style='max-width: 18rem;'>
        <div className='card-header'>Something went wrong</div>
        <div className='card-body text-danger'>
          <h5 className='card-title'>Cannot get data</h5>
          <p className='card-text'>
            {error
              ? error
              : 'Data required to display this page currently unavailable. Please try later.'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Error
