import React, { useState } from 'react'


function User() {

    const[color, setColor] = useState({
        color1:'RED',
        color2:'GREEN',
        color3:'YELLOW'  
    })
    console.log(color);
    const change = (data)=> {
        setColor({...color,color3:data})
    }
     
  return (
   <> 
   
   <div>User Component</div>

   <ul>
    <li>{color.color1}</li>
    <li>{color.color2}</li>
    <li>{color.color3}</li>
   </ul>

   <button className='btn btn-primary' onClick={()=>change('blue')}>Click</button>
   
   </>
  )
}

export default User