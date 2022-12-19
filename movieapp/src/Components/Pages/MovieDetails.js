import Buscador from '../search-box/buscador';
import ReturnButton from '../buttons/ReturnButton';
import React from 'react';
import axios from 'axios';
import Rating from '@mui/material/Rating';

// import hooks
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HomeButton from '../buttons/HomeButton';
//import components



function MovieDetails() {

    const [movie, setMovie] = useState([]);
    const { id } = useParams();
    const urlMovieDetails = `https://api.themoviedb.org/3/movie/${id}?api_key=90c2c57ed9eabcec0ae2b8ebe7b81547&language=es-ES`;
    const urlImg = `https://image.tmdb.org/t/p/original`;



    useEffect(() => {
        const getMovieDetailsData = async () => {
            const respMovieDetails = await axios.get(urlMovieDetails);
            setMovie(respMovieDetails.data);
            console.log(respMovieDetails.data);
        }
        getMovieDetailsData();
    }, [])


    return (
        <>
            <ReturnButton />
            <HomeButton />
            <Buscador />
            <div>
                <img className="poster" src={urlImg + movie.poster_path} alt="SIN IMAGEN DISPONIBLE" width="220px" />
                <p className='title'>{movie.title}</p>
                <p>{movie.tagline}</p>

                <p>{movie.overview}</p>

                <p className='rating'>{movie.vote_average / 2} / 5</p>
                <Rating className="ratingComp" name="half-rating-read" value={movie.vote_average / 2} precision={0.1} max={5} readOnly />
            </div>
        </>
    )
}


export default MovieDetails;