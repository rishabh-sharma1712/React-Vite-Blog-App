import React from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'

const AboutBlog = () => {
  const {topic} = useParams()
  const location = useLocation();
  const {allContent} = location.state
  const {detailedDescp, date} = allContent[0]
  return (
    <>
      <div className="card text-center" id='aboutHeader'>
        <div className="card-header">
          <h2>{topic}</h2>
        </div>
        <div className="card-body">
          <img src={location.state.img} className='img-fluid'  alt="..." />
          <p className="card-text" style={{marginTop:'1em'}}>{detailedDescp}</p>
          <Link to='/'>
            <button type="button" className="btn btn-secondary float-start">Back</button>
          </Link>
          <div className="badge text-bg-dark text-wrap float-end" style={{padding:"0.8em"}} >
           <h5>{date}</h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutBlog