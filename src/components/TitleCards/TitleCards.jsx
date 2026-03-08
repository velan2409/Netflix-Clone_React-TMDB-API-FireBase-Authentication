import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

const TitleCards = ({ title, category }) => {

  const [apiData, setApiData] = useState([]);

  const cardsRef = useRef();

  // start of code from  MoviesDB 
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjNjNmRmNDA3ZDViZjVjZDlmYWJiYTRjZDc4MDQ4OCIsIm5iZiI6MTc3Mjk1MTE4OS44ODksInN1YiI6IjY5YWQxNjk1NWY2MDEzYTk4ZDgwZTQwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ux1TNTaw0jN94zyi6d4m7QcVQXVcsmRIijnPZbIIdDs'
    }
  };
  // end of Movies DB code

  useEffect(() => {

    //
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));
    //

  }, [])
  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on NetFlix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500` + card.poster_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards