import Link from 'next/link'
import Card from './Card'
import Loading from './Loading'
import Error from './Error'

function PageSection({ meals, title, loading, error }) {
  const cards = meals.map((meal, i) => (
    <Link
      key={i}
      href={
        meal.idMeal
          ? `/recipe/${encodeURIComponent(meal.idMeal)}`
          : `/category/${encodeURIComponent(meal.strCategory)}`
      }
      passHref
    >
      <a>
        <Card meal={meal} />
      </a>
    </Link>
  ))

  return (
    <div className='section-container'>
      <div className='section py-4'>
        <div className='section-header'>
          <h2 className='mb-4'>{title}</h2>
        </div>
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error />
        ) : (
          <div className='cards-container'>{cards}</div>
        )}
      </div>
    </div>
  )
}

export default PageSection
