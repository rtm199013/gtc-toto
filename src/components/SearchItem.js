import React from 'react'

function SearchItem({searchItem, setSearchItem, handleSearch}) {
  return (
    <form className='searchItem'  onSubmit={ handleSearch }>
      <input 
        id="search" 
        type="text"
        role="searchBox"
        placeholder="Search Item"
        value={searchItem}
        onChange={ (e) => 
          setSearchItem(e.target.value) 
        }
        //value
        //value
        //value
      />
      {/* <button type="submit" arial-label="Add Item">
          Find Item
        </button> */}
    </form>
  )
}

export default SearchItem