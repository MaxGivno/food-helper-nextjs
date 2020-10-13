import Layout from './Layout'

const Loading = () => {
  return (
    <Layout>
      <div className='centered-container'>
        <div class='spinner-border' role='status'>
          <span class='sr-only'>Loading...</span>
        </div>
      </div>
    </Layout>
  )
}

export default Loading
