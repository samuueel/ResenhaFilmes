import { useEffect, useState, useRef } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import '../styles/Slider.css'

import MovieCard from "./MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Slider = (props) => {
  const [movies, setMovies] = useState([]);
  const slider = useRef(null)

  const getMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const Url = `${moviesURL}${props.category}?${apiKey}&language=pt-BR`;
    console.log(Url);
    getMovies(Url);
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
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>     
      <div className="iconsSlider">
        <BsFillArrowLeftCircleFill onClick={handleLeftClick}/>
        <BsFillArrowRightCircleFill onClick={handleRightClick}/>
      </div>
    </section>
  )
};

export default Slider;