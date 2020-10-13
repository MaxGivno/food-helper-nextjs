import { getCategories, getCategory } from '../../lib/themealdbapi'
import { useRouter } from 'next/router'

import Layout from '../../components/Layout'
import PageSection from '../../components/PageSection'

function Category({ category }) {
  const router = useRouter()
  const { slug } = router.query
  return (
    <Layout>
      <PageSection title={slug} meals={category} />
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
