import Link from "next/link"

const SearchResults = ({ results }) => {
  if (!results)
    return (
      <div className='centered-container' style={{ paddingBottom: "40px" }}>
        <h1 className='text-muted'>Nothing was found</h1>
        <p className='text-center text-muted'>Try to search something else</p>
      </div>
    )
  const list = results.map((meal, i) => (
    <Link key={i} href={`/recipe/${meal.idMeal}`}>
      <a>
        <li className='list-group-item media'>
          <img
            src={`${meal.strMealThumb}/preview`}
            className='mr-3'
            alt={meal.strMeal}
            width='64'
            height='64'
          ></img>
          {meal.strMeal}
        </li>
      </a>
    </Link>
  ))
  return (
    <div className='container'>
      <p>Found: {list.length}</p>
      <ul className='list-group mx-auto'>{list}</ul>
    </div>
  )
}

export default SearchResults
