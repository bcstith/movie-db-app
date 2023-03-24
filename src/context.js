import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
const AppContext = React.createContext()

let url = `${API_ENDPOINT}&s=`

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('superman');
    const [movies, setMovies] = useState([]);

  const fetchMovies = useCallback(async () => {

    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();

      if(data.Response === 'True'){

        setMovies(data.Search || data)

      } else {
        setMovies([]);
      }

       setLoading(false);

     //console.log(data)

    } catch (error){
      console.log(error);
      setLoading(false);
    }

  }, [searchTerm])

  useEffect(() => {fetchMovies()},[searchTerm, fetchMovies])



  return <AppContext.Provider value={{loading, movies, setSearchTerm}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
