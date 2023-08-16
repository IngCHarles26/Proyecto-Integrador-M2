import { REMOVE_FAV,ADD_FAV,FILTER_CARDS,ORDER_CARDS,ALL_FAV } from "./actions";


const initialState ={
  myFavorites:[],
  filterFavorites:[],
};

export default function rootReducer(state=initialState,{type,payload}){
  switch(type){
    case ADD_FAV:  
      state.myFavorites = [payload,...state.myFavorites];  
      state.filterFavorites = [...state.myFavorites];
      return {...state};
    case REMOVE_FAV: 
      state.myFavorites = state.myFavorites.filter(el=>el.id!=payload);  
      state.filterFavorites = [...state.myFavorites];
      return {...state};
    case ORDER_CARDS: 
      return {...state,filterFavorites:[...state.myFavorites].sort((a,b)=>payload==="A"?a.id-b.id:b.id-a.id)};
    case FILTER_CARDS: return {...state,filterFavorites:state.myFavorites.filter(el=>el.gender==payload)};
    case ALL_FAV: return {...state,filterFavorites:[...state.myFavorites]};
    default: return {...state};
  }
}