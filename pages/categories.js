import { getCategories } from '../lib/themealdbapi'

import Layout from '../components/Layout'
import PageSection from '../components/PageSection'

function Categories({ categories }) {
  return (
    <Layout>
      <PageSection title={'Categories'} meals={categories} />
    </Layout>
  )
}

export async function getStaticProps() {
  const categories = await getCategories()

  return {
    props: {
      categories,
    },
  }
}

export default Categories
