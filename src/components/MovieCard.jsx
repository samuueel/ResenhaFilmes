import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";
import { useAuthValue } from "../context/AuthContext";

const imagesURL = import.meta.env.VITE_IMG; 

const MovieCard = ({ movie, showLink = true }) => {
  const {user} = useAuthValue()
  return (
    <div className="movie-card">
      <img src={imagesURL + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      {user ?
        <>
          {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </>
        :
        <>
          {showLink && <Link to='./cadastro'>Para ver detalhes <br /> CADASTRE-SE</Link>}
        </>
      }
      
    </div>
  );
};

export default MovieCard;
