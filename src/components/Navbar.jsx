import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import { useAuthValue } from "../context/AuthContext";

import "../styles/Navbar.css";
import { useAuthentication } from "../hooks/useAuthentication";
import { FaUserCircle } from "react-icons/fa";

const Navbar = (props) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  function inputClick() {
    let input = document.querySelector('#inputSearch');
    let form = document.querySelector('')
    input.style.display = 'block';
  }

  const {user} = useAuthValue()
  const {logout} = useAuthentication()

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie /> ResenhaFilmes
        </Link>
      </h2>
      <div className="container-align">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="inputSearch"
            placeholder="Busque um filme"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button onClick={inputClick} type="submit">
            <BiSearchAlt2 />
          </button>
        </form>
        {user ? 
          <>
            <div className="user">
              <FaUserCircle/><h4>{user.displayName}</h4>             
            </div> 
            <h3 onClick={logout}>SAIR</h3>
          </>
          :
          <h3>
            <Link to={"/" + `${props.page}`}>
              {props.page}
            </Link>
          </h3>        
        }   
      </div>  
    </nav>
  );
};

export default Navbar;
