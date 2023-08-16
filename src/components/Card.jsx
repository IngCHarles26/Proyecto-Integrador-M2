import { NavLink } from "react-router-dom";
import { addFav,removeFav,orderCards,filterCards } from "../redux/actions";
import { connect } from "react-redux";
import React, { useState,useEffect } from 'react';
import { useLocation } from "react-router-dom";

const mapDispatchToProps = (dispatch)=>{
   return{
      addFav: (character)=>{dispatch(addFav(character))},
      removeFav: (id)=>{dispatch(removeFav(id))},
   }
}

const mapStateToProps = (state)=>{
   return{
      myFavorites: state.myFavorites,
      filterFavorites: state.filterFavorites
   }
}

function Card(props) {
   const {pathname} = useLocation();
   const {addFav,removeFav,myFavorites,filterFavorites} = props;
   const {onClose,name,status,species,gender,origin,image,id,character} = props;
   const [isFav, setIsFav] = useState(false);

   useEffect(()=>{
      if(myFavorites.some(el=>el.id==id)) setIsFav(true);
   },[myFavorites])

   const handleFavorite = ()=>{
      if(isFav) removeFav(id);
      if(!isFav) addFav(character);
      setIsFav(!isFav)
   }

   const handleClose=()=>{
      onClose(id)
   }

   return (
      <div>
         {pathname==="/home"&&<button onClick={handleClose}>X</button>}
         <NavLink to={`/detail/${id}`}>
            <h2>{name}</h2>
            <h3>{status}</h3>
            <h3>{species}</h3>
            <h3>{gender}</h3>
            <h3>{origin}</h3>
            <img src={image} alt='Imagen_Rickosa' />
         </NavLink>
         <button onClick={handleFavorite}>{isFav?"❤️":"🤍"}</button>
      </div>
   );
}

export default connect(mapStateToProps,mapDispatchToProps)(Card)
