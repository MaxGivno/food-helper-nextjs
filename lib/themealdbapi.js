import axios from 'axios'

const axiosWithBaseUrl = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v2/9973533',
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
  const latest = await axiosWithBaseUrl.get('/categories.php')
  const categories = await latest.data.categories

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
