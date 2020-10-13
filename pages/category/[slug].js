import { getCategories, getCategory } from '../../lib/themealdbapi'

import Layout from '../../components/Layout'
import PageSection from '../../components/PageSection'

function Category({ category }) {
  return (
    <Layout>
      <PageSection title={category.strCategory} meals={category} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const categories = await getCategories()
  const paths = categories.map((cat) => ({
    params: { slug: cat.strCategory },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const category = await getCategory(params.slug)

  return {
    props: {
      category,
    },
  }
}

export default Category
