import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import dataJson from './json/data.json';
import Navbar from './Navbar';
import { Filter, NoEncryption, PropaneSharp  } from '@mui/icons-material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import { SearchContext } from "./App"
import { useState, createContext, useContext , useEffect } from "react";
import { display, height, width } from '@mui/system';
import { MovieContext } from './App';
// import { FavList, FavListf } from './FavList';

function Body() {
  // const searchv=props.searchvalue;

  const { MovieType, setMovieType , FavList , setFavList ,searchvalue, setsearchvalue  } = useContext(MovieContext)

  const [ tFavList , settFavList ] = useState()

  // settFavList(FavList)

  console.log("MovieType inside body", MovieType)
  console.log("search value inside body is ", searchvalue)
  
  useEffect( () =>{
    console.log("mount sucessfull");
    settFavList(FavList)

    var dkeys = []
    Object.keys(dataJson).map(item => {
      dkeys.push(item)
    })

    var lfavlist = []
    dkeys.map(k => {
      if (MovieType == 'favourite') {
        dataJson[k].map(mrec => {
          lfavlist.push(mrec)
        })
      }
    })
    console.log("lfavlist length",lfavlist.length)
    setFavList(lfavlist)
    settFavList(lfavlist)
  } , [])

  var addToFav=(e,item)=>{  
    
    console.log("Fav item clicked and the item is ",item)
    console.log("Fav list ",FavList)

    var lfavlist = FavList
    var item_added=0;
    var remove_item=0;

    lfavlist.map((v)=>{
      if (MovieType=='favourite' ){ 
        if ( v.id==item.id){
            //remove movie from fav
            lfavlist.pop(item)
            alert(item.title+" Removed from Favourites")
            console.log("movie removed " , item)
            setFavList(lfavlist)
            settFavList(lfavlist)
            mstmovlst=tFavList
            item_added = 1
           
            
        }
      }
      else if (v.id==item.id){
          // movie alredy added to fav
          item_added = 1
          alert(item.title+" : Already added to Favourites")
      }  
    })

    if (item_added==0){
        lfavlist.push(item)
        alert(item.title + " Added to Favarites")
        setFavList(lfavlist)
        settFavList(lfavlist)
    }
    console.log(FavList , "new fav list");
    } 
  

  let dkeys = []
  Object.keys(dataJson).map(item => {
    dkeys.push(item)
  })

  let mstmovlst = []

  
  dkeys.map(k => {
    if (k != 'favourite') {
      dataJson[k].map(mrec => {
        mstmovlst.push(mrec)
      })
    }

    if (k == MovieType) {
      mstmovlst = []
      if (k=='favourite'){
        mstmovlst=tFavList
        console.log(mstmovlst , 'inside movie type');
      }else{
        dataJson[k].map(mrec => {
          mstmovlst.push(mrec)
        })
      }
    }
  
    

    //search funtion
    const title_list = []
    mstmovlst.map((item) => {
      title_list.push(item)
    })

    let Filtered_list=[]
    console.log("Fitlered list length before search",Filtered_list.length )

    title_list.filter(item => (item.title).includes(searchvalue)).map(filteredItems => {
      Filtered_list.push(filteredItems)
    })

    Filtered_list.map((item)=>{
      if (item.title.toLowerCase===searchvalue.toLowerCase()){
        mstmovlst=Filtered_list
        Filtered_list=[]
      }
      else{
        mstmovlst=Filtered_list
      }
    })
    
  })

  

  return (

    <ImageList cols={7} gap={5}>
      {mstmovlst.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={item.posterurl}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.year}
            actionIcon={
              <IconButton onClick={(e) =>addToFav(e,item)}
                sx={{ color: 'rgba(255, 255, 255, 1)' }}
                aria-label={`info about ${item.title}`}
              >
                <FavoriteBorderIcon/>
              </IconButton>
            }
            
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}


// read 5th line


export default Body;