import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import './Search.css'
import { useNavigate } from 'react-router-dom';

function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/'+ input)
    }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <FaSearch />
        <input onChange={(e) => setInput(e.target.value)} type="text"  value={input} placeholder='Serach For Recipe' />
     </form>
    </div>
  )
}

export default Search
