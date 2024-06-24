import React from 'react'
import '../App.css'

const Searchbarlist = (props) => {
  let {searchList } = props
  return (
    <div className='result-list'>
        
        {
          searchList.map((item, index) => {
            return (
              <div className='search-result' key={index} >
                <h6 className='search-result-text' value={item.original_title} onClick={(e) =>alert(`you clicked ${item.original_title}`) }>{item.original_title}</h6>
              </div>
            )
          })
        }
      
    </div>
  )
}

export default Searchbarlist;
