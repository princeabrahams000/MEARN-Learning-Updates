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
     
    const [userDetails, setUserDetails] = useState([
        {username:'neel', age:'27', desgination:'Frontend Developer'},
        {username:'max', age:'20',desgination:'Backend Developer'},
        {username:'nithin', age:'29', desgination:'Full stack Developer'},
        {username:'nivya',age:'30', desgination:'HR'}
    ])

  return (
   <> 
   
   <div>User Component</div>

   <ul>
    <li>{color.color1}</li>
    <li>{color.color2}</li>
    <li>{color.color3}</li>
   </ul>

   <button className='btn btn-primary' onClick={()=>change('blue')}>Click</button>
   
   {/* TABLE */}
   <table className='table rounded shadow table-border border border-secondeary mt-5'>
    <thead>
        <tr>
            <th className='p-3 bg-secondary'>SL NO</th>
            <th className='p-3 bg-secondary'>NAME</th>
            <th className='p-3 bg-secondary'>AGE</th>
            <th className='p-3 bg-secondary'>DESIGNATION</th>
        </tr>
    </thead>
    <tbody>
        {/* array.map((item)=>()) */}
        {userDetails.map((item,index)=>(<tr>
            <td>{index+1}</td>
            <td>{item.username}</td>
            <td>{item.age}</td>
            <td>{item.desgination}</td>
        </tr>
        ))}
        
    </tbody>
   </table>
   </>
  )
}

export default User