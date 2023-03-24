import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_ENDPOINT } from './context';


const SingleMovie = () => {
  const {id} = useParams();

  let url = `${API_ENDPOINT}&i=${id}`

  const [movies, setMovies] = useState(0);

const getMovies = useCallback(async () => {

  try {
    const response = await fetch(url);
    const data = await response.json();

    if(data){
      setMovies(data)
    }

  }catch (error){
      console.log(error)
  }

  // eslint-disable-next-line
},[])

useEffect(() => {getMovies()},[id,getMovies])

const {Poster, Title, Plot, Year, Genre, Rated, Runtime, Director} = movies;
console.log(movies)

  return (<section className='single-movie'>
    <img src={Poster} alt={Title} />
    <div className="single-movie-info">
      <h2>{Title}</h2>
      <p>{Plot}</p>
      <ul>
        <li><b>Year: </b> {Year}</li>
        <li><b>Genre: </b> {Genre}</li>
        <li><b>Rating: </b> {Rated}</li>
        <li><b>Runtime: </b> {Runtime}</li>
        <li><b>Director: </b> {Director}</li>
      </ul>

      <Link to="/" className="btn btn-primary">Back to Movies</Link>
    </div>
  </section>)
}

export default SingleMovie
