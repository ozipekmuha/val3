import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../App.css";
import coder from "../img/img/blog/coder.jpg";
import croissance from "../img/img/blog/croissance.jpg";
import google from "../img/img/blog/google.jpg";
import screens from "../img/img/blog/screens.jpg";
import seo from "../img/img/blog/seo.jpg";
import technos from "../img/img/blog/technos.png";

function CardExample({ title, image, description }) {
  const cardsData = [
    {
      title: "Coder",
      image: coder,
      description: " Coder c'est un univers tellement vaste ... ",
    },
    {
      title: "Croissance",
      image: croissance,
      description: " Les plantes est au coeur du monde ...",
    },
    {
      title: "Google",
      image: google,
      description: " Google est un moteur de recherche ... ",
    },
    {
      title: "Screens",
      image: screens,
      description:
        "Les écrans pourvus d'une dalle de type TN (Twisted Nematics) offrent une grande réactivité ...",
    },
    {
      title: "Seo",
      image: seo,
      description:
        "Le SEO (Search Engine Optimization) est l'acronyme qui signifie ...",
    },
    {
      title: "Technos",
      image: technos,
      description:
        " Les technologie de nos jours sont basé sur différent langages de codes ...",
    },
  ];
  return (
    <div className="container">
      <div className="row">
        {cardsData.map((card, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
            <Card style={{ width: "100%" }} className="card">
              <Card.Img
                variant="top"
                src={card.image}
                className="card-img-top"
              />
              <Card.Body className="card-body">
                <Card.Title className=" texte">{card.title}</Card.Title>
                <Card.Text className=" texte">{card.description}</Card.Text>
                <Button variant="primary" className="btn texte">
                  En savoir plus
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardExample;
