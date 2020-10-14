import { getAllMeals, getMeal } from "../../lib/themealdbapi"
import Link from "next/link"

import Layout from "../../components/Layout"
import IngredientsList from "../../components/IngredientsList"
import Directions from "../../components/Directions"
import ForkedFrom from "../../components/ForkedFrom"

function Recipe({ recipe }) {
  const ingredients = () => {
    let arr = Object.entries(recipe)
    let ingNames = arr.filter((item) => item[0].startsWith("strIngre"))
    let ingMeasures = arr.filter((item) => item[0].startsWith("strMeasur"))
    let list = []
    for (let i = 0; i < ingNames.length; i++) {
      if (ingNames[i][1]) {
        list.push(
          <p key={i} className='ingredient'>
            <img
              src={`https://www.themealdb.com/images/ingredients/${ingNames[i][1]}-Small.png`}
              style={{
                height: "100px",
                width: "100px",
                objectFit: "scale-down",
              }}
              alt={ingNames[i][1]}
            />
            <span
              style={{ marginTop: "0rem" }}
            >{`${ingMeasures[i][1]} ${ingNames[i][1]}`}</span>
          </p>
        )
      }
    }
    return list
  }

  // Parse directions from recipe
  const steps = () => {
    const regex = /\r\n/g
    let paragraphs = recipe.strInstructions
      .split(regex)
      .filter((str) => !/^\d+\.?$/.test(str))
    paragraphs = paragraphs
      .map((str) => str.replace(/^\d+\.\s/g, ""))
      .filter((str) => str !== "")
    return paragraphs.map((text, i) => (
      <li key={i}>
        <p>{text}</p>
      </li>
    ))
  }

  const ytVideo = () => {
    if (recipe.strYoutube !== "") {
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
              color: "Tomato",
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
        {recipe.strSource !== "" && <ForkedFrom source={recipe.strSource} />}
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await getAllMeals()
  const paths = res.map((meal) => ({
    params: { slug: meal.idMeal },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const recipe = await getMeal(params.slug)

  return {
    props: {
      recipe,
    },
  }
}

export default Recipe
