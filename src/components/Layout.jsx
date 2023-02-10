//Importando componentes
import SearchMovie from "./SearchMovie";
import CardMovie from "./CardMovie";
import SectionHomeFilms from "./SectionHomeFilms";
import { searchForCategorie } from "../api/moviesAPi";
//Importando estilos
import '../styles/Layout.css';
import { useMovies } from "../context/MoviesProvider";

const Layout = ({view}) => {
  let { listMoviesAll, listNewReleases, listSearchMovies,setListSearchMovies,films,categories } = useMovies();

  const searchCategorie = async({ target: {id} })=>{
    setListSearchMovies(await searchForCategorie(id));
  }
  return(
    <div className="layout" style={{ 'display': view }}>
      <header className="headerLayout">
        <h3 className="titleHeader">Films</h3>
        <SearchMovie />
      </header>
      <div className="bodyLayout">
        <div className="newReleasesContainer" style={listSearchMovies || films ? {'display':'none'}:{'display':'block'}} >
          <h3 className="titleBody">New Releases</h3>
          <div className="movieContainer">
            { listNewReleases?.results?.map((movie)=> {
              return <CardMovie width={'40rem'} height={'15rem'} image={movie.poster_path} key={movie.id} id={movie.id} />
            }) }
          </div>
        </div>
        <div className="allMoviesContainer" style={listSearchMovies || films ? {'display':'none'}:{'display':'flex'}}>
            { listMoviesAll?.results?.map((movie)=>{
              return <CardMovie width={'13rem'} height={'20rem'} image={movie.poster_path} key={movie.id} id={movie.id} />
            })}
        </div>
        <div className="allMoviesContainer" style={listSearchMovies ? {'display':'flex'}:{'display':'none'}}>
        { listSearchMovies?.results?.map((movie)=>{
              return <CardMovie width={'13rem'} height={'20rem'} image={movie.poster_path} key={movie.id} id={movie.id} />
            })}
        </div>

        <div className="allMoviesContainer" style={ films ? {'display':'flex'}:{'display':'none'}}>
        { films?.results?.map((movie)=>{
              return <CardMovie width={'13rem'} height={'20rem'} image={movie.poster_path} key={movie.id} id={movie.id} />
            })}
        </div>
      </div>
      <section className="baner">
        <div className="logoContainer">
          <img className="logo" src="https://skysmobileapps.com/assets/img/logo_lgr.png" alt="Logo" />
        </div>
        <SectionHomeFilms page={'Home'} icon={'Home'} id={'home'} />
        <SectionHomeFilms page={'Films'} icon={'theaters'} id={'films'} />

        <div className="categoriaContainer">
          <h3 className="titleCategoria">Categorias</h3>
          { categories?.genres.map((genre)=> {
            return <p onClick={searchCategorie} className="categoria" id={genre.id} key={genre.id}>{genre.name}</p>
          }) }
        </div>
      </section>
    </div>
  );
};

export default Layout;