import React from "react"
import  { useState } from "react"
const List = () => {
    const [items,setItems]= useState(
        [
            {
                id : 1,
                anime : "Naruto",
                checked : true 
            },
            {
                id : 2,
                anime : "Death Note",
                checked : true 
            },
            {
                id : 3,
                anime : "Dragon Ball Z",
                checked :false 
            },
        ]
    )
  return (
    <div>
        <ul>
            {items.map((item)=>(
            <li>
          <input type='checkbox' checked={item.checked}/>
          <label>{item.anime}</label>
          <button>Unwatched</button>
            </li>
            ))}

        </ul>
    </div>
  )
}

export default List