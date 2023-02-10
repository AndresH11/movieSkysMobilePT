//Importando estilos
import '../styles/SectionHomeFilms.css';
import { useMovies } from '../context/MoviesProvider';
import { FilmsMovies } from '../api/moviesAPi';

const SectionHomeFilms = ({ page, icon, id }) => {
  let { setFilms } = useMovies();

  const handleClick = async({ target : {id}}) => {

    if(id == 'films'){
      setFilms( await FilmsMovies());
    }else{
      setFilms(false);
    }
  };

  return(
    <div className="sectionHomeFilmsContainer" id={id} onClick={handleClick}>
      <span className="material-symbols-outlined" id={id}>{ icon }</span>
      <p className="titleSection" id={id}>{ page }</p>
    </div>
  );
};

export default SectionHomeFilms;