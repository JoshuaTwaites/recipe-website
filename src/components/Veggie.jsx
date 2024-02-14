import React, { useEffect, useState } from 'react'
import './Veggie.css'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Link } from 'react-router-dom'

function Veggie() {

  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  },[]);

  const getVeggie = async () => {

    const check = localStorage.getItem('veggie');

    if(check) {
      setVeggie(JSON.parse(check));
    } 
    else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
      const data = await api.json();
      localStorage.setItem('veggie', JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  }

  return (
      <div>
            <div className='veggie'>
              <h3>Vegetarian Picks</h3>
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
  
              {veggie.map((recipe) => {
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

export default Veggie
