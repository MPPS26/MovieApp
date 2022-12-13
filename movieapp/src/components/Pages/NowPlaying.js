import React from 'react';
import axios from 'axios';
// import hooks
import { useEffect, useState, useNavigate } from 'react';
import { Link } from 'react-router-dom';
//import components
import ReturnButton from '../buttons/ReturnButton';
import Buscador from '../search-box/buscador';
import Rating from '@mui/material/Rating';
//Import css
import '../../styles/movieByGenrePage.css';
import '../../styles/buscador.css'




function NowPlaying(props) {


    const [movies, setMovies] = useState([]);
    const [pages, setPages] = useState(1);

    const API_KEY = '90c2c57ed9eabcec0ae2b8ebe7b81547';
    const urlMovies = `https://api.themoviedb.org/3/movie/now_playing?api_key=90c2c57ed9eabcec0ae2b8ebe7b81547&language=es-ES&page=${pages}`;
    const urlImg = `https://image.tmdb.org/t/p/original`;



    //const navigate = useNavigate();



    //Obtenemos todas las películas
    useEffect(() => {
        const getMoviesData = async () => {
            const respMovies = await axios.get(urlMovies);
            setMovies(respMovies.data.results);
            console.log(respMovies.data.results);
        }
        getMoviesData();
    }, [pages])

    return (
        <>
            <header className="header">Movies</header>
            <div className='movieListHeader'>
                <h1 className='genre'>| Cartelera <img src='https://cdn-icons-png.flaticon.com/512/8893/8893034.png' width="19px" /></h1>
                <ReturnButton />
            </div>
            <div className='search-box'>
                <Buscador />
            </div>


            <div className='container'>

                {movies.map((movie) =>
                    <div className='movies'>
                        <Link to='/'>
                            <img className="poster" src={urlImg + movie.poster_path} alt="SIN IMAGEN DISPONIBLE" width="220px" />
                            <p className='title'>{movie.title}</p>
                            <p className='rating'>{movie.vote_average / 2} / 5</p>
                            <Rating className="ratingComp" name="half-rating-read" value={movie.vote_average / 2} precision={0.1} max={5} readOnly />
                            <div key={movie.id} />
                        </Link>
                    </div>
                )}

            </div>
            <div id='btns'>
                <button id="prev" onClick={() => {
                    if (pages > 0) {
                        setPages(pages - 1)
                    }

                }}
                    disabled={pages <= 1 ? true : false}>
                    <img src='https://cdn-icons-png.flaticon.com/512/8893/8893000.png' width="16px" />
                </button>

                <p id='page' >
                    {pages < 0 ? pages : pages} de 20
                </p>

                <button id='next' onClick={() => {
                    setPages(pages + 1)
                }}
                    disabled={pages == 20 ? true : false} >
                    <img src='https://cdn-icons-png.flaticon.com/512/8893/8893034.png' width="16px" />
                </button>
            </div >
        </>
    )
}


export default NowPlaying;


/*API_KEY='90c2c57ed9eabcec0ae2b8ebe7b81547';*/
