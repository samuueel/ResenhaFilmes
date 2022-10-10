import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Banner from "./Banner";
import "./MoviesGrid.css";

const Home = () => {
  return (
    <div className="container">
      <Navbar page="login"/>
      <Banner/>  
      <h2 className="title">Novos</h2>
      <Slider category="upcoming"/>
      <h2 className="title">Populares</h2>
      <Slider category="popular"/>
      <h2 className="title">Melhores filmes</h2>
      <Slider category="top_rated"/>
      <Footer/>
    </div>
  );
};

export default Home;
