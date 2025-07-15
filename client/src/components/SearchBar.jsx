import { useState, UseEffect } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import '../style/Home.css';

function SearchBar ({ onSearch}) {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        const value = e.target.value; 
        setInput (value);
        onSearch (value); 

    }; 

    return ( 
        <div className="search-container">
            <FaSearch className="search-icon" />
            <input 
            type="text"
             className="search-bar" 
             placeholder="Search for jobs"
              value={input} 
              onChange={handleChange}
               />
        </div>
    );
}
export default SearchBar;