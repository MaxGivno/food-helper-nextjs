function Directions({ steps }) {
  return (
    <section className='steps'>
      <h4 className='recipe-element-title'>Directions:</h4>
      <ol className='steps-list'>{steps}</ol>
    </section>
  )
}

export default Directions
