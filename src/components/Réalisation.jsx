import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../App";

import Bienetre from "../img/img/portfolio/espace-bien-etre.jpg";
import Marcher from "../img/img/portfolio/fresh-food.jpg";
import Resto from "../img/img/portfolio/restaurant-japonais.jpg";
import Footer from "./Footer";
import Header from "./Header";

function BasicExample() {
  return (
    <div className="row">
      <Header />
      <h1>Portfolio</h1>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <Card className="card" style={{ width: "18rem" }}>
          <Card.Img className="card-img-top" variant="top" src={Bienetre} />
          <Card.Body className="card-body">
            <Card.Title>Site de relaxation</Card.Title>
            <Card.Text className="texte">
              Vous avez envie d’essayer la méditation mais vous ne savez pas par
              où commencer ?
            </Card.Text>
            <Button className="btn" variant="primary">
              En savoir plus
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Marcher} />
          <Card.Body>
            <Card.Title>site marcher de légume</Card.Title>
            <Card.Text>
              L’Ambiance et la Qualité des Marchés couverts, toute l’année et
              ouvert même le Dimanche.
            </Card.Text>
            <Button variant="primary">En savoir plus </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Resto} />
          <Card.Body>
            <Card.Title>restaurant japonnais</Card.Title>
            <Card.Text>
              Ambiance familiale et détendue : découvrir toutes les saveurs de
              la cuisine asiatique.
            </Card.Text>
            <Button variant="primary">En savoir plus</Button>
          </Card.Body>
        </Card>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default BasicExample;
