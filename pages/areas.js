import { getAllAreas } from '../lib/themealdbapi'

import Layout from '../components/Layout'
import PageSection from '../components/PageSection'

function Areas({ areas }) {
  return (
    <Layout>
      <PageSection title={'Areas'} meals={areas} />
    </Layout>
  )
}

export async function getStaticProps() {
  const areas = await getAllAreas()

  return {
    props: {
      areas,
    },
  }
}

export default Areas
