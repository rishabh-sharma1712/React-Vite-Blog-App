import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import './App.css'
import Layout from './Layout';
import { AboutBlog, Error, Home } from './components';
import { useContext } from 'react';
import { BlogContext } from './components/store/BlogContext';

function App() {
  const details = useContext(BlogContext)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' exact element={<Layout />}>
        <Route path='' exact element={<Home />} />
        <Route path="about/:topic" exact element={<AboutBlog />} />
        <Route path='*' element={<Error />} />
      </Route>
      
    )
  )
  return (
    <BlogContext.Provider value={details}>
      <RouterProvider router={router} />
    </BlogContext.Provider>
  )
}

export default App
