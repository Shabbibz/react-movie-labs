import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [watchLaters, setWatchLater] = useState( [] )


  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };
  
  const [myReviews, setMyReviews] = useState( {} ) 

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  //console.log(myReviews);


  
  // We will use this function in the next step
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addToWatchLater = (movie) => {
    let newWatchLaters = [];
    if (!watchLaters.includes(movie.id)){
      newWatchLaters = [...watchLaters, movie.id];
    }
    else{
      newWatchLaters = [...watchLaters];
    }
    setWatchLater(newWatchLaters)
  };
    console.log(watchLaters);



  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToWatchLater,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );

};



export default MoviesContextProvider;
