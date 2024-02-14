import React, { useEffect, useState } from 'react'
import './Popular.css'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Link } from 'react-router-dom'

function Popular() {

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  },[]);

  const getPopular = async () => {

    const check = localStorage.getItem('popular');

    if(check) {
      setPopular(JSON.parse(check));
    } 
    else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
      const data = await api.json();
      localStorage.setItem('popular', JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  }

  return (
    <div>
          <div className='popular'>
            <h3>Popular Picks</h3>
            <Splide options={{
              perPage: 3,
              arrows: false,
              pagination: false,
              drag: 'free',
              gap: '5rem',
              breakpoints: {
                1024: {
                  perPage: 2,
                 
                },
                640: {
                  perPage: 1,
            
                },
              },
            }}>

            {popular.map((recipe) => {
              return(
                <SplideSlide key={recipe.id}>
                <div className='card'>
                <Link to={'/recipe/' + recipe.id} >
                  <p className='card--title'>{recipe.title}</p>
                  <img className='card--image' src={recipe.image} alt={recipe.title} />
                  <div className='gradient'/>
                  </Link>
                </div>
                </SplideSlide>
              )
            })}
            </Splide>
          </div>
    </div>
  )
}



export default Popular
