import { createContext, useContext, useState } from "react";

export const MoviesContext = createContext([]);;

const Movies = ({ children }) => {
  const [listMoviesAll, setListMoviesAll] = useState([]);
  const [listNewReleases, setListNewReleases] = useState([]);
  const [ details, setDetails ] = useState();
  const [listSearchMovies, setListSearchMovies] =useState(false);
  const [ films, setFilms ] = useState(false);
  const [similarMovies,setSimilarMovies] = useState();
  const [ categories, setCategories ] = useState();

  return(
    <MoviesContext.Provider
      value={{
        listMoviesAll,
        listNewReleases,
        listSearchMovies,
        films,
        details,
        similarMovies,
        categories,
        setCategories,
        setSimilarMovies,
        setDetails,
        setFilms,
        setListMoviesAll,
        setListNewReleases,
        setListSearchMovies,
        }} >
      { children }
    </MoviesContext.Provider>
  );
};

export default Movies;

export const useMovies = ()=> {
  const context = useContext(MoviesContext);
  return context;
}