import React from 'react'
import { Routes , Route , Navigate } from 'react-router-dom';
import { Resaults } from './Resaults';
export const Routs = () => {
    const pathes = ['/search', '/images', '/news', '/videos'];
    const pathesRoute = pathes.map((el,index) => {
        return (
            <Route key={index} exact path={el} element={<Resaults/>}></Route>
        )
    })
  return (
      <div className='p-4'>
          <Routes>
              <Route exact path='/' element={<Navigate to='/search'/>}>
              </Route>
              {pathesRoute}
          </Routes>
    </div>
  )
}
