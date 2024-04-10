import Accordion from "react-bootstrap/Accordion";
import Footer from "./Footer";
import Header from "./Header";

function MentionsLegales() {
  return (
    <div>
      <Header></Header>
      <h1>Mention Légales</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>L'éditeur du site:</Accordion.Header>
          <Accordion.Body>LECLERC Valentin</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>L'hébergeur du site</Accordion.Header>
          <Accordion.Body>
            le nom de lhébergeur Insérer les informations sur l'hébergeur du
            site ici.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Souce des images</Accordion.Header>
          <Accordion.Body>
            Pixabay vous permet de trouver facilement des images pour illustrer
            le contenu de votre site web.
            <a href="https://pixabay.com/fr/">https://pixabay.com/fr/</a>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Footer></Footer>
    </div>
  );
}

export default MentionsLegales;
