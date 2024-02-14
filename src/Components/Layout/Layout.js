import React from 'react'
import { One } from '../Pages/One'
import { Two } from '../Pages/Two'
import { Three } from '../Pages/Three'

export const Layout = () => {
  return (
    <div>
        <h1 className='text-center'>Design system for react js </h1>

        <div className='text-center'>
            <button className='btn btn-primary m-2'>get started</button>
            <button className='btn btn-light'>watch video</button>
        </div>

        <div className='d-flex flex-row justify-content-around mt-5'>
            <One/>
            <Two/>
            <Three/>
        </div>


    </div>
  )
}
