import { getLatest, getRandom } from '../lib/themealdbapi'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import PageSection from '../components/PageSection'

function Index({ latestMeals, randomMeals }) {
  return (
    <Layout>
      <Hero />
      <PageSection title={'Recently added'} meals={latestMeals} />
      <PageSection title={'Random selection'} meals={randomMeals} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const latestMeals = await getLatest()
  const randomMeals = await getRandom()

  return {
    props: {
      latestMeals,
      randomMeals,
    },
  }
}

// export async function getStaticProps() {
//   const latestMeals = await getLatest()
//   const randomMeals = await getRandom()

//   return {
//     props: {
//       latestMeals,
//       randomMeals,
//     },
//   }
// }

export default Index
