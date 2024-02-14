import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Recipe.css'

function Recipe() {

  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailData = await data.json();
    setDetails(detailData);
  }

  useEffect(() => {
    fetchDetails();
  },[params.name])

  return (
    <div className='wrapper'>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt=""  className='food--image'/>
      </div>

      <div className="info">
        <button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</button>
        <button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</button>
        {activeTab === 'instructions' && (
          <div className='active--tab'>
            <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
          </div>
        )}

        {activeTab === 'ingredients' && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>
                {ingredient.original}
              </li>
            ))}
          </ul>
        )}

      </div>

    </div>
  )
}

export default Recipe
