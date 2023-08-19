import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import SearchBar from './components/SearchBar.jsx';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Route,Routes,useLocation,useNavigate } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Error from './components/Error';
import Form from './components/Form';
import Favorites from './components/Favorites';
import { useSelector,useDispatch } from 'react-redux';
import { removeFav } from './redux/actions';


function App() {
   const [sizeCharacters, setSizeCharacters] = useState(0);
   const [characters, setCharacters] = useState([]);
   const {pathname} = useLocation();
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = "a@a.a";
   const PASSWORD = "a123";
   const myFavorites = useSelector(state=>state.myFavorites)
   const filterFavorites = useSelector(state=>state.filterFavorites)
   const dispatch = useDispatch();
   
   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   useEffect(()=>{
      axios(`https://rickandmortyapi.com/api/character/`)
         .then(data=>{setSizeCharacters(data.data.info.count)})
   },[])

   const  onSearch = (id)=>{
      if(id>sizeCharacters || id<=0) {window.alert("No hay personajes con ese ID!!!"); return;}
      
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if(characters.some(el=>el.id===data.id)) {window.alert("Ya está incluido ese personaje!!!!"); return;}
         setCharacters([data,...characters])
      });
   }

   const onClose = (id) => {
      setCharacters(characters.filter(el=>el.id!==id));
      if(myFavorites.some(el=>el.id==id)) dispatch(removeFav(id));
   };

   return (
      <>
         {pathname!=="/" &&
            <Nav 
            onSearch={onSearch}
            characters={characters}
            sizeCharacters={sizeCharacters}/>
         }
         <Routes>
            <Route path="/" element={
               <Form
                  login={login}/>}/>
            <Route path="/home" element={
               <Cards 
                  characters={characters} 
                  onClose={onClose} />}/>
            <Route path="/about" element={
               <About/>}/>
            <Route path="/detail/:id" element={
               <Detail
                  characters={characters}/>}/>
            <Route path="/favorites" element={
               <Favorites
                  onClose={onClose}/>}/>
            <Route path="*" element={
               <Error/>}/>
         </Routes>
      </>
   );
}

export default App;
