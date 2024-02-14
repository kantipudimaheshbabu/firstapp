import React from 'react'

export const Three = () => {
  return (
    <>
    <div className='w-50 border text-center'>
        <h3>login to your account</h3>
        <p>dont have an account create one</p>

        <input type='text' placeholder='username' className='form-control mb-2'/>
        <input type='password' placeholder='password' className='form-control'/>
        <div className="button text-center">
            <button className='btn btn-warning m-2'> login</button>
        </div>
    </div>
    </>
  )
}
