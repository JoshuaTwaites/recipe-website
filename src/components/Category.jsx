import React from 'react'
import { NavLink } from 'react-router-dom'
import './Category.css'

function Category() {
  return (
    <div className='category--icons'>
      <NavLink to={`/cuisine/Italian`} className='navlink'>
        <h4>Italian</h4>
      </NavLink>
      <NavLink to={`/cuisine/American`} className='navlink'>
        <h4>American</h4>
      </NavLink>
      <NavLink to={`/cuisine/Thai`} className='navlink'>
        <h4>Thai</h4>
      </NavLink>
      <NavLink to={`/cuisine/Japanese`} className='navlink'>
        <h4>Japenese</h4>
      </NavLink>
    </div>
  )
}

export default Category
