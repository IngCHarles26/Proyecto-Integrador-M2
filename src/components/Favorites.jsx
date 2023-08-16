import { connect } from "react-redux";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { addFav,removeFav,orderCards,filterCards,allFav } from "../redux/actions";
import { useState } from "react";

function Favorites(props){
  const {myFavorites,filterFavorites} = props;
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder=(e)=>{
    dispatch(orderCards(e.target.value));
    console.log({myFavorites,filterFavorites})
    setAux(!aux);
  }

  const handleFilter=(e)=>{
    dispatch(filterCards(e.target.value));
  }
  
  const handleAll=()=>{
    dispatch(allFav())
  }

  return(
    <div>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      <button onClick={handleAll} value="">Todos</button>
      {filterFavorites.map(el=>{
        return <Card 
            character={el}
            id={el.id}
            name={el.name} 
            status={el.status} 
            species={el.species} 
            gender={el.gender} 
            origin={el.origin.name} 
            image={el.image} 
            onClose={props.onClose}
            key={el.id}
        />
      })}
      </div>
  )
}

const mapStateToProps = (state)=>{
  return{
    myFavorites: state.myFavorites,
    filterFavorites: state.filterFavorites,
  }
}

export default connect(mapStateToProps,null)(Favorites);