import React from 'react';
import { FaTrashAlt, faTrashAlt } from 'react-icons/fa';

export default function ListKey( {items,handleCheck, handleDelete} ) {

  return (
    <div>      
      <ul>
        { 
          items.map( (item) => (
            <li key={item.id}>
              <input 
                type="checkbox" 
                checked={item.checked}
                onChange={ () => handleCheck(item.id) }
              />

              <label
                onDoubleClick={ () => handleCheck(item) }>
                {item.item}
              </label>    
              
              <FaTrashAlt 
                role="button" 
                tabIndex="0"
                onDoubleClick={ () => handleDelete(item.id) }
              />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

