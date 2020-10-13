function IngredientsList({ ingList }) {
  return (
    <section className='ingredients'>
      <h4 className='recipe-element-title'>Ingredients:</h4>
      <div>{ingList}</div>
    </section>
  )
}

export default IngredientsList
