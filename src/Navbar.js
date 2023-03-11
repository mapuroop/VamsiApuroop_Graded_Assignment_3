import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import SearchIcon  from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Body from './Body';
import { useState, createContext, useContext } from "react";
import dataJson from './json/data.json';
// import { SearchContext } from "./App"
import { MovieContext } from './App';
import ReactDOM from 'react-dom/client';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const names='sathya';


const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // const[searchvalue,setsearchvalue]=React.useState();
  const {searchvalue , setsearchvalue} = useContext(MovieContext);


  const handleChange = eve =>{
      setsearchvalue(eve.target.value)
  }

  let dkeys = []
  Object.keys(dataJson).map(item=>{
    dkeys.push(item)
  })

  const {MovieType,setMovieType} = useContext(MovieContext)

  const Movie= eve=>{
    eve.preventDefault();
    console.log("button clicked!!!!");
    setMovieType(eve.target.innerText);
  }

  return (
    
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <LocalMoviesIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }} />

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Movie Directory
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              id="search_text"
              // onChange={handleChange}
              onChange={handleChange}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />

          <Typography
            variant="p"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 1,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              margin : '0 3rem ',
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           {dkeys.map((item)=>(
                <button id={item} style={{display :"inline-block",paddingBlock :"10px",cursor:"pointer",padding:"5px 10px"}} key={item} onClick={Movie}> {item }</button>
            ))
          }
          </Typography>

          

          <FavoriteBorderIcon key='favourite' onClick={Movie} sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }} />

          
  

        </Toolbar>
      </Container>
    </AppBar>
  
  );
}


export default Navbar;