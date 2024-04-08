import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
        <div className="text-success">
            <samp>This Page does not Exist.</samp>
            <hr className="border border-primary border-3 opacity-75"></hr>
        </div>
        
        <Link to='/'>
            <button type="button" className="btn btn-warning float-start">Go Home</button>
        </Link>
    </>
  )
}

export default Error