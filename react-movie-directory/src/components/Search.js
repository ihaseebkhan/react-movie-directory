import React from 'react'

function Search({callback}) {

  return (
    <section className='layout-row justify-content-center mb-40'>
      <input 
        type='text'
        placeholder='Search for movie by name' 
        className='w-75 py-2'
        onChange={callback}
      />
    </section>
  )
}

export default Search
