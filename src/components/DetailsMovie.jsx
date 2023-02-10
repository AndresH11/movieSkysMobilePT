//Importando estilos
import '../styles/DetailsMovies.css';
import { useViewDetails } from '../context/ViewProvider';
import { DetailsMovies as DetailsMoviess, SimilarMovies } from "../api/moviesAPi";
import { useMovies } from '../context/MoviesProvider';

const DetailsMovies = ({ view }) => {
  let { setViewDetails } = useViewDetails();
  let { details, similarMovies, setDetails, setSimilarMovies } = useMovies();

  const handleClick = () => {
    setViewDetails(false);
    console.log(details)
    console.log(similarMovies)
  };

  const handleClick2 = async({ target: {id} }) => {
    console.log(id)
    setDetails(await DetailsMoviess({ movie_id: id }));
    setSimilarMovies(await SimilarMovies({movie_id: id }));
    setViewDetails(true);
  }

  return (
    <div className='containerDetails' style={{ 'display': view }}>
      <span className="material-symbols-outlined arrow" onClick={handleClick}>arrow_back_ios</span>
      <img className='poster' src={`https://image.tmdb.org/t/p/w300/${details?.poster_path}`} alt='poster' />
      <section id="movieDetail" className="movieDetail-container inactive">
        <h1 className="movieDetail-title">{details?.title}</h1>
        <span className="movieDetail-score">{details?.vote_average}</span>
        <p className="movieDetail-description">
          {details?.overview}
        </p>

        <article className="categories-list">
          {details?.genres?.map((genre) => {
            <div className="category-container">
              <h3 id="id28" className="category-title">{genre}</h3>
            </div>
          })}
        </article>

        <article className="relatedMovies-container">
          <h2 className="relatedMovies-title">Películas similares</h2>

          <div className="relatedMovies-scrollContainer">
            {similarMovies?.results.map((movie) => {
              return <div className="movie-container" key={movie.id} id={movie.id} onClick={handleClick2} >
                <img
                  id={movie.id}
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  className="movie-img"
                  alt="Nombre de la película"
                />
              </div>
            })}
          </div>
        </article>
      </section>
    </div>
  );
};

export default DetailsMovies;