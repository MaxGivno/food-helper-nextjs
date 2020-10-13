import { getMeal } from '../../lib/themealdbapi'
import { useRouter } from 'next/router'
import axios from 'axios'
import Link from 'next/link'
import useSWR from 'swr'

import Layout from '../../components/Layout'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import IngredientsList from '../../components/IngredientsList'
import Directions from '../../components/Directions'
import ForkedFrom from '../../components/ForkedFrom'

const axiosWithBaseUrl = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v2/9973533',
  responseType: 'json',
})

function Recipe() {
  const router = useRouter()
  const { slug } = router.query

  const fetcher = (url) => axiosWithBaseUrl(url).then((r) => r.data.meals[0])

  const { data, error } = useSWR(`/lookup.php?i=${slug}`, fetcher)

  if (error) return <Error />
  if (!data) return <Loading />
  const recipe = data

  const ingredients = () => {
    let arr = Object.entries(recipe)
    let ingNames = arr.filter((item) => item[0].startsWith('strIngre'))
    let ingMeasures = arr.filter((item) => item[0].startsWith('strMeasur'))
    let list = []
    for (let i = 0; i < ingNames.length; i++) {
      if (ingNames[i][1]) {
        list.push(
          <p key={i} className='ingredient'>
            <img
              src={`https://www.themealdb.com/images/ingredients/${ingNames[i][1]}-Small.png`}
              style={{
                height: '100px',
                width: '100px',
                objectFit: 'scale-down',
              }}
              alt={ingNames[i][1]}
            />
            <span
              style={{ marginTop: '0rem' }}
            >{`${ingMeasures[i][1]} ${ingNames[i][1]}`}</span>
          </p>
        )
      }
    }
    return list
  }

  // Parse directions from recipe
  const steps = () => {
    const regex = /[\r\n]+/g
    let paragraphs = recipe.strInstructions
      .split(regex)
      .filter((str) => !/^\d+$/.test(str))
    paragraphs = paragraphs.map((str) => str.replace(/^\d+\.\s/g, ''))
    return paragraphs.map((text, i) => (
      <li key={i}>
        <p>{text}</p>
      </li>
    ))
  }

  const ytVideo = () => {
    if (recipe.strYoutube !== '') {
      return (
        <a
          href={recipe.strYoutube}
          className='yt-container my-2'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i
            className='fab fa-youtube fa-3x'
            style={{
              color: 'Tomato',
            }}
          ></i>
          &nbsp;&nbsp;Watch on YouTube
        </a>
      )
    }
  }

  return (
    <Layout>
      <div className='recipe'>
        <section className='title'>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <div className='title-info'>
            <h1 className='my-4 font-weight-bold'>{recipe.strMeal}</h1>
            <div className='icons'>
              <Link href={`/category/${recipe.strCategory}`}>
                <a>
                  <p className='tag'>{recipe.strCategory.toUpperCase()}</p>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <hr />
        <section className='recipe-body'>
          {ytVideo()}
          <div className='main mt-3'>
            <IngredientsList ingList={ingredients()} />
            <Directions steps={steps()} />
          </div>
        </section>
        {recipe.strSource !== '' && <ForkedFrom source={recipe.strSource} />}
      </div>
    </Layout>
  )
}

// export async function getServerSideProps({ query }) {
//   const { slug } = query
//   const recipe = await getMeal(slug)

//   return { props: { recipe } }
// }

export default Recipe
