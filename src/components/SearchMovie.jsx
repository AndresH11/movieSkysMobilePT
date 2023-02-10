//Importando estlos
import '../styles/SearchMovie.css';
//Importando funciones
import { SearchMovies } from '../api/moviesAPi';
import { useMovies } from '../context/MoviesProvider';

const SearchMovie = ()=> {
  //Lista de peliculas
  const { setListSearchMovies } = useMovies();

  //Buscamos la pelicula y lo asignamos a la variable listMovies
  const handleChange = async({ target: {value} }) => {
    if(value){
      setListSearchMovies(await SearchMovies({ movieName: value }));
    }else{
      setListSearchMovies(false);
    }
  };

  return(
    <div className="SearchMovieContainer">
      <span className="material-symbols-outlined">search</span>
      <input type="text" placeholder="Search" className="inputSearchMovie" onChange={handleChange} />
    </div>
  );
};

export default SearchMovie;