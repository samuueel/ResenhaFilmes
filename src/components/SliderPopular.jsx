import { useEffect, useState, useRef } from "react";
import MovieCard from "./MovieCard";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const SliderPopular = () => {
  const [topMovies, setTopMovies] = useState([]);
  const slider = useRef(null)

  const getPopularMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const PopularUrl = `${moviesURL}popular?${apiKey}&language=pt-BR`;
    console.log(PopularUrl);
    getPopularMovies(PopularUrl);
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

export default SliderPopular;