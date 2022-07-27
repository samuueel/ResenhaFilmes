import { useEffect, useState, useRef } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";


import '../styles/Slider.css'

import MovieCard from "./MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const SliderTop = () => {
  const [topMovies, settopMovies] = useState([]);
  const slider = useRef(null)

  const gettopMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    settopMovies(data.results);
  };

  useEffect(() => {
    const topUrl = `${moviesURL}top_rated?${apiKey}&language=pt-BR`;
    console.log(topUrl);
    gettopMovies(topUrl);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    slider.current.scrollLeft -= 230;
  }

  const handleRightClick = (e) => {
    e.preventDefault();
    slider.current.scrollLeft += 225;
  }

  return (
    <section className="main-content">
      <div className="movies-container" ref={slider}>
        {topMovies.length > 0 &&
            topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)} 
      </div>
      <div className="iconsSlider">
        <BsFillArrowLeftCircleFill onClick={handleLeftClick}/>
        <BsFillArrowRightCircleFill onClick={handleRightClick}/>
      </div>
    </section>
  )
};

export default SliderTop;