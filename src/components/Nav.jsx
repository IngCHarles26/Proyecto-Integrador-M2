import React from 'react';
import SearchBar from './SearchBar';
import { NavLink } from 'react-router-dom';
function Nav(props) {
  return (
    <div>
      <NavLink to="/home">
        <button>Home</button>
      </NavLink>
      <NavLink to="/about">
        <button>About</button>
      </NavLink>
      <NavLink to="/favorites">
        <button>Favorites</button>
      </NavLink>
      <SearchBar 
        onSearch={props.onSearch}
        characters={props.characters}
        sizeCharacters={props.sizeCharacters}/>
    </div>
  );
} 

export default Nav;