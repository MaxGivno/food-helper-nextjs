import Layout from './Layout'

const Loading = () => {
  return (
    <Layout>
      <div className='centered-container'>
        <div className='spinner-border' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    </Layout>
  )
}

export default Loading
