import React from 'react'
import * as Data from "react-loader-spinner"

export const Loading = () => {
  return (
      <div className='flex justify-center items-center'>
          <Data.Rings type="puff" color='#00bfff' height={550} width={80} />
    </div>
  )
}
