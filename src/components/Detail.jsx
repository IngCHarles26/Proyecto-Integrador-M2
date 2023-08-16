import { useParams,useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';

export default function Detail(props){
  const {pathname} = useLocation();
  const {characters} = props;
  const {id} = useParams();
  const detailCharacter = characters.filter(el=>el.id==id)[0];
  return(
    <div>
      {detailCharacter
        ?
        <div>
          <h2>{detailCharacter.name}</h2>
          <h2>{detailCharacter.status}</h2>
          <h2>{detailCharacter.gender}</h2>
          <h2>{detailCharacter.species}</h2>
          <h2>{detailCharacter.origin.name}</h2>
          <img src={detailCharacter.image} alt="Imagen_Rickosa"/>
        </div>
        :<h1>Anda patras bobo!!!!</h1>}
    </div>   
  )
}