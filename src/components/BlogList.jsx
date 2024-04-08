import React from 'react'
import { BlogListContent, Cooking, CyberAttack, Dancing, Entertainment, NorthenLights, PhotoGraphy, Programming, qualityTime, reactJs, socialMedia, timeTable, travel, videoGaming, walking, workOut, workSpace } from '.'

const BlogList = () =>{
  return (
    <>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <BlogListContent img={Cooking} title='Cooking' />
            <BlogListContent img={CyberAttack} title='Cyber Attack' />
            <BlogListContent img={Dancing} title='Dancing' />
            <BlogListContent img={Entertainment} title='Entertainment' />
            <BlogListContent img={NorthenLights} title='Northen Lights' />
            <BlogListContent img={PhotoGraphy} title='PhotoGraphy' />
            <BlogListContent img={Programming} title='Programming' />
            <BlogListContent img={qualityTime} title='Quality Time' />            
            <BlogListContent img={timeTable} title='Time Table' />
            <BlogListContent img={travel} title='Travelling' />
            <BlogListContent img={videoGaming} title='Video Gaming' />
            <BlogListContent img={walking} title='Walking' />
            <BlogListContent img={workOut} title='Workout' />
            <BlogListContent img={reactJs} title='React Js' />
            <BlogListContent img={workSpace} title='WorkSpace' />
            <BlogListContent img={socialMedia} title='Social Media' />
        </div>
    </>
  )
}

export default BlogList