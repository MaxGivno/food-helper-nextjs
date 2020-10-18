import axios from 'axios'

const baseURL =
  process.env.DB_HOST || 'https://www.themealdb.com/api/json/v1/1/'

const axiosWithBaseUrl = axios.create({
  baseURL: baseURL,
  responseType: 'json',
})

export async function getLatest() {
  const latest = await axiosWithBaseUrl.get('/latest.php')
  const latestMeals = await latest.data.meals

  return latestMeals
}

export async function getRandom() {
  const random = await axiosWithBaseUrl.get('/randomselection.php')
  const randomMeals = await random.data.meals

  return randomMeals
}

export async function getCategories() {
  // This return full list of full category objects
  const latest = await axiosWithBaseUrl.get('/categories.php')
  const categories = await latest.data.categories
  // This return category names only
  // const latest = await axiosWithBaseUrl.get("/list.php?c=list")
  // const categories = await latest.data.meals

  return categories
}

export async function getCategory(catName) {
  const res = await axiosWithBaseUrl.get(`/filter.php?c=${catName}`)
  const category = await res.data.meals

  return category
}

export async function getMeal(id) {
  const res = await axiosWithBaseUrl.get(`/lookup.php?i=${id}`)
  const meal = await res.data.meals[0]

  return meal
}

export async function searchByName(name) {
  const res = await axiosWithBaseUrl.get(`/search.php?s=${name}`)
  const meal = await res.data.meals

  return meal
}

export async function getAllMeals() {
  const res = await axiosWithBaseUrl.get('/search.php?s=')
  const meal = await res.data.meals

  return meal
}

export async function getAllIngredients() {
  const res = await axiosWithBaseUrl.get('/list.php?i=list')
  const ingredients = await res.data.meals

  return ingredients
}

export async function getAllAreas() {
  const res = await axiosWithBaseUrl.get('/list.php?a=list')
  const areas = await res.data.meals

  return areas
}
