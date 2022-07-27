import { BiCameraMovie } from "react-icons/bi";

import '../styles/Footer.css'


const Footer = () => {
  return (
    <footer>
        <div className="title">
            <BiCameraMovie />
            <h3>ResenhasFilmes</h3>
        </div>

        <div className="copy">
            <span>© 2022 RESENHASFILME S.A. Todos os direitos reservados.</span>
        </div>
    </footer>
  );
};

export default Footer;