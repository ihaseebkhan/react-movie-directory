import React from 'react'

function Movieslist({list}) {

  return (
    <section>
      <ul 
        className='styled w-100 pl-0'
      >
      {list.map((item)=> {
        return <li 
        key={item.id}
        className='flex slide-up-fade-in justify-content-between'
        style={{borderBottom: '2px solid var(--primary-color)'}}
      >
        <div className='layout-column w-40'>
          <h3 className='my-3'>{item.name}</h3>
          {`Ratings: ${item.ratings}/100`}
          <p className='my-0'></p>
        </div>
        <div className='layout-row my-auto mr-20'>
          {item.duration}
          <p className='justify-content-end'></p>
        </div>
      </li>
      })}
      </ul>
    </section>
  )
}

export default Movieslist;
