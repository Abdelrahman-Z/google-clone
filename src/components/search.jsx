import React , {useState , useContext , useEffect} from 'react'
import { Links } from './Links'
import { useDebounce } from 'use-debounce'
import { Context } from '../context/ResaultsContextProvider'


function Search() {
  const [Text, setText] = useState('')
  const { setSearchTerm } = useContext(Context)
  const [debounceValue] = useDebounce(Text, 1000)
  
  useEffect(() => {
    if(debounceValue) setSearchTerm(debounceValue)
  }, [debounceValue])
  
  return (
    <div className='relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3'>
      <input value={Text}
        type='text'
        className='sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg'
        placeholder='search Goggle or type url'
        onChange={(e)=> setText(e.target.value)}
      />
      {Text && (
        <button type='button' className='absolute top-1.5 right-4 text-2xl text-gray-500' onClick={()=> setText('')}>X</button>
      )}
      <Links/>

    </div>
  )
}

export default Search