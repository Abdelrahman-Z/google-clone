import React from 'react'
import { NavLink } from 'react-router-dom'

export const Links = () => {
    const links = [
        {url:'/search' , text: 'All'},
        {url:'/images' , text: 'images'},
      ]
  return (
    <div className='flex sm:justify-around justify-between items-center mt-4'>
      {links.map(({ url, text } , index) => (
        <NavLink key={index} to={url} className='text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 m-2'>{text}</NavLink>
      ))}
    </div>
  )
}
