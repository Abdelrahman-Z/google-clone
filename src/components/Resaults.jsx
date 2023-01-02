import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useLocation } from "react-router-dom"
import {Context} from '../context/ResaultsContextProvider'
import { Loading } from './Loading'
export const Resaults = () => {
    const { getResaults, Resault, SearchTerm, IsLoading } = React.useContext(Context)
    const location = useLocation()
    if(IsLoading) return <Loading/>
  
    useEffect(() => {
        if (typeof SearchTerm === 'string') {
            getResaults(SearchTerm ,location.pathname)
        }
    }, [SearchTerm , location.pathname])
    

    switch (location.pathname) {
        case '/search':
            return (
                <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
                    {Resault?.map(({link , title} , index) => (
                        <div key={index} className='md:w-2/5 w-full'>
                            <a href={link} target='_blank' rel='noreferrer'>
                                <p className='text-sm'>
                                    {link.length > 30 ? link.substring(0,30) : link }
                                </p>
                                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                                    {title}
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            )
        case '/images':
            return (
                <div className='flex flex-wrap justify-center items-center'>
                    {Resault?.map((el , index) => (
                        <a className='sm:p-3 p-5' href={el.link} key={index} target='_blank' rel='noreferrer'>
                            <img src={el.imageUrl} alt={el.title} loading='lazy' className='w-52' />
                            <p className='w-36 break-words text-sm mt-2'>
                                {el.title}
                            </p>
                        </a>
                    ))}
                </div>
            )
        case '/videos':
            return (
                <div className='flex flex-wrap'>
                    {Resault.map((video , index) => (
                        <div key={index} className='p-2'>
                            <ReactPlayer url={video.link} controls width='355px'></ReactPlayer>
                        </div>
                    ))}
                </div>
            )
        default:
            return "ERROR";
    }

}
