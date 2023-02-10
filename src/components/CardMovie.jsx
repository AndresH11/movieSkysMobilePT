import { useViewDetails } from "../context/ViewProvider";
import { DetailsMovies, SimilarMovies } from "../api/moviesAPi";
import { useMovies } from "../context/MoviesProvider";

const CardMovie = ({ width, height, image, id }) => {

  let { setViewDetails } = useViewDetails();
  let { setDetails, setSimilarMovies } = useMovies();
  //Deiniendo estilos
  const estilos = {
    'width' : width,
    'height' : height,
    'borderRadius' : '1rem',
    'cursor' : 'pointer'
  }

  const handleClick = async({ target: {id} }) => {
    console.log(id)
    setDetails(await DetailsMovies({ movie_id: id }));
    setSimilarMovies(await SimilarMovies({movie_id: id }));
    setViewDetails(true);
  }

  return(
    <div className="cardMovieContainer" style={estilos} onClick={handleClick} id={id} >
      <figure style={estilos} id={id}>
        <img  id={id} style={{'width':'100%','height':'100%', 'borderRadius':'1rem'}} src={`https://image.tmdb.org/t/p/w300/${image}`} alt="Imagen de la pelicula" />
      </figure>
    </div>
  );
};

export default CardMovie;