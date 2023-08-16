import React, { useState, useEffect } from 'react';

export default function SearchBar(props) {
   const {sizeCharacters,characters,onSearch} = props;
   const [id, setId] = useState("");

   const handleChange=(e)=>{setId(e.target.value)};

   const handleSearch = ()=>{onSearch(id)};

   const handleRandom = ()=>{
      let randomId = -1;
      do{
         randomId = Math.round(Math.random()*(sizeCharacters-1));
      } while(characters.some(el=>randomId===el.id));
      onSearch(randomId)
   }

   return (
      <div>
         <input 
            type='search' 
            value={id} 
            onChange={handleChange}/>
         <button 
            onClick={handleSearch}
            >Agregar</button>
         <button
            onClick={handleRandom}
            >Aleatorio</button>
      </div>
   );
}
