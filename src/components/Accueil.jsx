import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import "../App.css";
import Apropos from "./A propos";
import Footer from "./Footer";
import Header from "./Header";

function Accueil() {
  const aboutSectionRef = useRef(null);

  const handleClick = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="acc">
      <Header></Header>
      <div className="conteneur-image">
        <div className="overlay">
          <h1 className="title">John DOE</h1>
          <h2 className="title"> Développeur Web</h2>
          <div className="button">
            <Button onClick={handleClick} variant="primary">
              En savoir plus
            </Button>
          </div>
          <div>
            <Apropos ref={aboutSectionRef}></Apropos>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Accueil;
