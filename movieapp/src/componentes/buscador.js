import axios from 'axios';
import { useEffect, useState } from 'react';


function Buscador() {

    const [movie, setMovie] = useState([])
    const [searchField, setSearchField] = useState("");
    const search = "";

   
    const searcher = (e) => {
      setSearchField(e.target.value)
      console.log(e.target.value)
    }

    const resultMovie = !searcher ? movie : movie.filter((dato) => dato.name.toLowerCase().includes(searchField.toLocaleLowerCase()))      // ! si no ingresamos nada movie, de lo contrario hacemos el filtrado

    

  useEffect(() => {
    const getMovieData = async () => {
      const respMovie = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=90c2c57ed9eabcec0ae2b8ebe7b81547&language=en-US&page=1&include_adult=false&query=${searcher}`)
      setMovie(respMovie.data.results);
      console.log(respMovie.data.title);
    }
    getMovieData();
  }, []);  
  console.log(movie)

  
  return (
    <div className='Buscador'>
      
      <input value={searchField} onChange={searcher} type="text" placeholder='Search' className='form-control'></input>
    {resultMovie.map(movie => console.log(movie.title))}
    </div>

  );
      }
export default Buscador