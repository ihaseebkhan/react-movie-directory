import React from 'react'

function Movieform(props) {
 const {form, callback, formValid} = props;

  return (
    <section>
      <div className='card pa-30'>
        <form onSubmit={ e => e.preventDefault() }>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input 
              type='text' 
              id='name'
              placeholder='Enter Movie Name'
              onChange={callback}
              value={form.name}
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>Ratings</label>
            <input 
              type='number' 
              id='ratings'
              placeholder='Enter Rating on a scale of 1 to 100'
              onChange={callback}
              value={form.ratings}
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration</label>
            <input 
              type='text' 
              id='duration'
              placeholder='Enter duration in hours or minutes'
              onChange={callback}
              value={form.duration}
            />
          </div>
          {!formValid && <div 
            className='alert error mb-30'
            onChange={callback}
          >
            Please specify time in hours or minutes (e.g. 2.5h or 150m)
          </div>}
          <div className='layout-row justify-content-end'>
            <button 
              type='submit'
              id='submit'
              className='mx-0'
              onClick={callback}
            >
              Add Movie
            </button>
          </div>
          </form>
      </div> 
    </section>
  )
}

export default Movieform
