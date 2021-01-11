import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {

  const {handleSearch, query} = useGlobalContext()

  return <form className="search-form" onSubmit={(e)=>{e.preventDefault()}}>
    <h2>peïo search news</h2>
    <input type="text" className="form-input" value={query} onChange={(e)=> handleSearch(e.target.value)}/>
  </form>
}

export default SearchForm
