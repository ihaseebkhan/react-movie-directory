import React, {useState} from 'react'
import './App.css'
import 'h8k-components'

import { Movieform, Movieslist, Search } from './components'

const title = 'Movie Directory'

function App() {
const [form, setForm] = useState({id: 0, name: '', ratings: '', duration: ''})
const [list, setList] = useState([])
const [formValid, setFormValid] = useState(true)
const [search, setSearch] = useState('')

const validateForm = () => {
  if (form.duration.includes('h') || form.duration.includes('m')) {
    return true;
  } else return false;
}

const convertMinsToHours = (mins) => {
 return mins.substr(0, form.duration.indexOf('m'))/60 + 'h';
}

const onChangeForm = (e) => {
  if (e.target.id === 'submit') {
    if (validateForm()) {
      let nDuration = form.duration;
      if (nDuration.includes('m')) {
        nDuration = convertMinsToHours(form.duration);
      }
      setList([...list, {...form, duration: nDuration}]);
      setForm({id: 0, name: '', ratings: '', duration: ''})
    } else {
      setFormValid(false)
      setForm({id: 0, name: '', ratings: '', duration: ''})
    } 
  } else { 
    setFormValid(true);
    setForm({...form, id: list.length, [e.target.id]: e.target.value}); 
  }
}

const onChangeSearch = (e) => {
setSearch(e.target.value)
}

const getList = () => {
  if (search) {
    return [...list.filter((item)=>
      item.name.includes(search)
    )]
  }
  return list;
}

  return (
    <div>
      <h1 className='text-center'>{title}</h1>
      <div className='layout-row justify-content-center mt-100'>
        <div className='w-30 mr-75'>
          <Movieform form={form} callback={onChangeForm} formValid={formValid} />
        </div>
        <div className='layout-column w-30'>
          <Search callback={onChangeSearch} />
          {getList().length > 0 && <Movieslist list={getList()} />}          
          {search && getList().length === 0 && <h3 className='text-center'>No Results Found</h3>}
        </div>
      </div> 
    </div>
  )
}

export default App;
