import React, { useState } from 'react'

function Register() {

    const [Details, setDetails] = useState({
        username: "",
        email: "",
        password: ""
    })

    console.log(Details);

    const handleRegister = () =>{
        const{username,email,password} = Details
        alert(`user registered successfully with user name is ${username} and Email as ${email}and password as ${password} `)
    }

  return (
    <div className='d-flex justify-content-center align-items-center'>
        <form className='m-4 p-3 shadow w-50'>
            <h3 className='text-center text-primary '>Register</h3>
            <div className='mb-3'>
                <input type="text" className='form-control' placeholder='Enter the username' onChange={(e)=>setDetails({...Details,username:e.target.value
                })} />
            </div>
            
            <div className='mb-3'>
                <input type="email" className='form-control' placeholder='Enter the Email' onChange={(e)=>setDetails({...Details,email:e.target.value})} />
            </div>

            <div className='mb-3'>
                <input type="text" className='form-control' placeholder='Enter the password' onChange={(e)=>setDetails({...Details,password:e.target.value})}/>
            </div>
            <div className='mb-3'>
                <button className='btn btn-primary' onClick={handleRegister}> Register
                </button>
            </div>
        </form>
        </div>
  )
}

export default Register