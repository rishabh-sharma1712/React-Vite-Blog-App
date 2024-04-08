import React, { useContext } from 'react'
import BlogList from './BlogList'
import { BlogContext } from './store/BlogContext'
import Loading from './Loading'

const Home = () => {
  const details = useContext(BlogContext)
  return (
    <>
        <div className="card text-center">
            <div className="card-body">
                <h1 className="display-4">My Blog App</h1>
                <p className="lead">
                    Click on <strong>More</strong> to explore more about post.
                </p>
            </div>
        </div>
        {details.length === 0 ? <Loading /> :<BlogList />}
        
    </>
  )
}

export default Home