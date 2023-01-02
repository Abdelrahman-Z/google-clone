import React, {createContext, useState } from "react";

const Context = createContext();

export const ResaultsContextProvider = ({ children }) => {
    const [Resault, setResault] = useState([]);
    const [IsLoading, setIsLoading] = useState(false)
    const [SearchTerm, setSearchTerm] = useState('facebook')

  const getResaults = async (type , dataType) => {
    setIsLoading(true)

    // show the apis
    console.log(dataType)
    if (dataType === '/search' || dataType === '/images') {
      var myHeaders = new Headers();
      myHeaders.append("X-API-KEY", "5626347e9edd9b2af9fdd231b1c2db3b0a275788");
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({
        "q": type,
        "gl": "us",
        "hl": "en",
        "autocorrect": true,
        "page": 7
      });
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch(`https://google.serper.dev${dataType}`, requestOptions)
        .then(response => response.json())
        .then(result => {
          setResault(()=> result.organic ? result.organic : result.images)
        } )
        .catch(error => console.log('error', error));
    }
    setIsLoading(false)
    }
  return (
      <Context.Provider value={{getResaults , Resault ,SearchTerm , setSearchTerm , IsLoading}}>
          {children}
    </Context.Provider>
  )
}

export { Context }
