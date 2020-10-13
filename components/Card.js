const Card = ({ meal }) => {
  return (
    <div className='section-card'>
      <div className='img-container'>
        <img
          src={meal.strMealThumb ? meal.strMealThumb : meal.strCategoryThumb}
          alt={meal.strMeal ? meal.strMeal : meal.strCategory}
          className={meal.strMeal ? 'thumb' : 'thumb-category'}
        />
      </div>
      <h3 className='my-3'>{meal.strMeal ? meal.strMeal : meal.strCategory}</h3>
    </div>
  )
}

export default Card
