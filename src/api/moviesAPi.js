//

export const SearchMovies = async({ movieName })=>{
  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b5ef548f8871b0bc494c1a64ce6a22ef&language=es&query=${movieName}&page=1&include_adult=false&year=2021`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const NewReleasesMovies = async() => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=b5ef548f8871b0bc494c1a64ce6a22ef&language=es&page=1&include_adult=false');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const ListMovies = async() => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=b5ef548f8871b0bc494c1a64ce6a22ef&language=es&page=1&include_adult=false');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const FilmsMovies = async() => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=b5ef548f8871b0bc494c1a64ce6a22ef&language=es&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=2021-09-01&primary_release_date.lte=2021-12-31');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const DetailsMovies = async({ movie_id }) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=b5ef548f8871b0bc494c1a64ce6a22ef&language=es`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const SimilarMovies = async({ movie_id }) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=b5ef548f8871b0bc494c1a64ce6a22ef&language=es`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const categoriasMovies = async() => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=b5ef548f8871b0bc494c1a64ce6a22ef`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const searchForCategorie = async(id) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&api_key=b5ef548f8871b0bc494c1a64ce6a22ef`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};