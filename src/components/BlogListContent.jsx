import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BlogContext } from './store/BlogContext'

const BlogListContent = ({img, title}) => {
    const details = useContext(BlogContext)
    const allContent = details.filter((each) => each.topic === title)
    const {date} = allContent[0]
    const {shortDescp} = allContent[0]
    const linkTo = `/about/${title}`

  return (
    <>
      <div className="col">
        <div className="card">
          <img src={img} className="card-img-top rounded" />
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{shortDescp}</p>
            <Link to={linkTo} state={{img, allContent, date}}>
              <button type="button" className="btn btn-sm btn-primary">More</button>
            </Link>
            <div className="badge text-bg-dark text-wrap float-end" style={{padding:"0.8em"}} >
              {date}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogListContent