import React from "react";
import { getUpcomingMovies } from "../api/tmdb-api"; //this will change
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites' //this will change

const UpcomingMovies = (props) => {

  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['discoverUpcomingMovies'],
    queryFn: getUpcomingMovies,
  })
  
  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  
  const movies = data.results;


  return (
    <PageTemplate
      title="Discover Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} /> //this will change
      }}
    />
);
};
export default UpcomingMovies;
