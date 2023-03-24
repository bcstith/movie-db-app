import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  const {movies, loading} = useGlobalContext();


  if (loading) {
    return <h1 className="loading">Loading Movies ...</h1>
  }


  return (
    <section className="movies">
        {
          movies.map((item) => {
          const {imdbID, Poster, Title, Year} = item;

          let image = Poster

          if(Poster === 'N/A'){
            image = url;
          }

            return(
              <Link to={`/movie/${imdbID}`} className="movie">
                <img src={image} alt={Title} />
                <div className="movie-info">
                    <h4>{Title}</h4>
                    <p>{Year}</p>
                </div>
              </Link>
            )
          })

        }
    </section>
  )
}

export default Movies
