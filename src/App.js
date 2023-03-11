import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Navbar from './Navbar';
import Body from './Body';
import { useState, createContext, useContext } from "react";


export const SearchContext = createContext();
export const MovieContext=createContext();  
export const FavListContext = createContext();

function App() {
  const[searchvalue,setsearchvalue]=useState();
  const[MovieType,setMovieType]=useState();
  const[FavList , setFavList] = useState();


  return (
      <MovieContext.Provider value={{MovieType,setMovieType , FavList , setFavList , searchvalue , setsearchvalue}}> 

        <Navbar/>
        <Body />
        </MovieContext.Provider>
       
  );
}
export default App;
