import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import "../styles/Navbar.css";

const Navbar = () => {
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
    f
  }

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie /> ResenhaFilmes
        </Link>
      </h2>
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
    </nav>
  );
};

export default Navbar;
