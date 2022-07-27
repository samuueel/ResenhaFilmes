import Footer from "../components/Footer";
import SliderTop from "../components/SiliderTop";
import SliderNews from "../components/SliderNews";
import SliderPopular from "../components/SliderPopular";
import "./MoviesGrid.css";

const Home = () => {
  return (
    <div className="container">
      <h2 className="title">Novos</h2>
      <SliderNews/>
      <h2 className="title">Populares</h2>
      <SliderPopular/>
      <h2 className="title">Melhores filmes</h2>
      <SliderTop/>
      <Footer/>
    </div>
  );
};

export default Home;
