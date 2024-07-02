import React from 'react'

function Register() {
  return (
    <div className='d-flex justify-content-center align-items-center'>
        <form className='m-4 p-3 shadow w-50'>
            <h3 className='text-center text-primary '>Register</h3>
            <div className='mb-3'>
                <input type="text" className='form-control' placeholder='Enter the username' />
            </div>
            
            <div className='mb-3'>
                <input type="email" className='form-control' placeholder='Enter the Email' />
            </div>

            <div className='mb-3'>
                <input type="text" className='form-control' placeholder='Enter the password'/>
            </div>
            <div className='mb-3'>
                <button className='btn btn-primary'> Register
                </button>
            </div>
        </form>
        </div>
  )
}

export default Register