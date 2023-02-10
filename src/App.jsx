//Importando componentes
import Layout from './components/Layout';
import { useEffect } from 'react';
import { useMovies } from './context/MoviesProvider';
import { useViewDetails } from './context/ViewProvider';
import { NewReleasesMovies, ListMovies, categoriasMovies } from './api/moviesAPi';
import DetailsMovies from './components/DetailsMovie';
//Importando estilos
import './App.css';

function App() {
  //Trayendo el contexto
  let { setListMoviesAll, setListNewReleases, setCategories } = useMovies();
  let { viewDetails } = useViewDetails()

  //Función para obtener el listados de new Releases y Movies all, en el primer render
  const getNewReleasesAndListMoviesAll = async() => {
    setListNewReleases(await NewReleasesMovies());
    setListMoviesAll(await ListMovies());
    setCategories(await categoriasMovies());
  };

  //
  useEffect(()=>{
    getNewReleasesAndListMoviesAll();
  },[]);

  return (
    <div className="App">
      <Layout view={viewDetails ? 'none':'grid'} />
      <DetailsMovies description={'esto es una descripcion por'} view={viewDetails ? 'block':'none'} />
    </div>
  )
};

export default App
