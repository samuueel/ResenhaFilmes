import { useEffect, useState, useRef } from "react";
import MovieCard from "./MovieCard";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

import '../styles/Slider.css'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const SliderNews = () => {
  const [newMovies, setnewMovies] = useState([]);
  const slider = useRef(null)

  const getNewMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setnewMovies(data.results);
  };

  useEffect(() => {
    const NewUrl = `${moviesURL}upcoming?${apiKey}&language=pt-BR`;
    console.log(NewUrl);
    getNewMovies(NewUrl);
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
        {newMovies.length > 0 &&
            newMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)} 
      </div>
      <div className="iconsSlider">
        <BsFillArrowLeftCircleFill onClick={handleLeftClick}/>
        <BsFillArrowRightCircleFill onClick={handleRightClick}/>
      </div>
    </section>
  )
};

export default SliderNews;