import { useEffect, useState } from 'react';
import axios from 'axios';
import './Carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import MovieByGenrePage from './Pages/MovieByGenrePage';
import { useNavigate, useParams } from 'react-router-dom';



function CarouselGenres(movie) {

  const navigate = useNavigate();
  const [genreData, setGenreData] = useState([]);
  const [genre, setGenre] = useState();


  useEffect(() => {
    const getGenreData = async () => {
      const respGenreData = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=90c2c57ed9eabcec0ae2b8ebe7b81547&language=es-ES`);
      setGenreData(respGenreData.data.genres);
      console.log(respGenreData.data.genres);
    }
    getGenreData();
  }, [])



  /*función para las flechas*/
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "white" }}
        onClick={onClick}
      />
    );
  }

  /*Para el carrusel de las géneros*/
  const settingsGenres = {
    speed: 300,
    centerPadding: "40px",
    arrows: true,
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    /*prevArrow: <SamplePrevArrow/>*/
  };

  return (
    <div className='carousel_container'>
      {/*renderizamos el listado de géneros*/}
      <div>


        <Slider {...settingsGenres}>
          {genreData.map((genre) => {

            return (

              <button key={genre.id} onClick={()=>{navigate(`genre/${genre.id}/ ${genre.name}`)}}>
          {genre.name}</button>

        )
          })
          }
      </Slider>

    </div>
    </div >
  );
}

export default CarouselGenres


