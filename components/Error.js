import Layout from './Layout'

const Error = () => {
  return (
    <Layout>
      <div className='centered-container'>
        <div class='card border-danger mb-3' style='max-width: 18rem;'>
          <div class='card-header'>Something went wrong</div>
          <div class='card-body text-danger'>
            <h5 class='card-title'>Cannot get data</h5>
            <p class='card-text'>
              Data required to display this page currently unavailable. Please
              try later.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Error
