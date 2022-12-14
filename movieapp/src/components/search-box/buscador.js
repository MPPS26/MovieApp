import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/buscador.css'

function Buscador() {

    const [films, setFilms] = useState([])


  const onSearchHandler = (text)=>{
console.log(text)
  }
  
  const onChangeHandler = async (text) =>{
    if (text.length>2){
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=90c2c57ed9eabcec0ae2b8ebe7b81547&language=es-ES&page=1&include_adult=false&query=${text}`)
      setFilms(response.data.results);

    }
  }
  
  return (
    <div className="search-container">

    <input type="text" className="col-md-12" placeholder='Search Movie...' 
    onChange={e=> onChangeHandler(e.target.value)}
    onBlur={() => {
      setTimeout(() =>{
        setFilms([])
      }, 200);
    }}
    />
    {films.map((search, i)=>
    <Link to="/" >
    <div key={i} className="search col-md-12 justify-content-md-center" 
    onClick={()=> onSearchHandler(search.title)}>{search.title}</div></Link>
    )}
    </div>
    

  );
      }
export default Buscador