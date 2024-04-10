import ProgressBar from "react-bootstrap/ProgressBar";
import "../App";
import Photo from "../img/img/john-doe-about.jpg";

function Apropos() {
  return (
    <div>
      <h1>A propos</h1>
      <div class="contenu">
        <img className="img" src={Photo} alt="john doe" />
        <h1>John Doe</h1>
        <p>Occupation : Développeur Web en reconversion</p>
        <p>Localisation : Paris</p>
        <p className="descrip">
          Description : je suis un jeune homme déterminé à changer de carrière
          pour se lancer dans le développement web. En reconversion
          professionnelle, je mes toute mon énergie dans l'apprentissage des
          langages de programmation, la création de sites web et d'applications,
          et l'amélioration de ses compétences techniques. Toujours en quête de
          défis stimulants, je cherche à se perfectionner dans le développement
          front-end et back-end pour devenir un développeur web polyvalent et
          compétent. Ma passion pour la technologie et sa volonté de réussir
          font de moi un futur professionnel du web prometteur.
        </p>
      </div>
      <div className="bar">
        <div>
          <h2>HTML</h2>
          <ProgressBar className="barre" striped variant="success" now={90} />
        </div>
        <div>
          <h2>CSS</h2>
          <ProgressBar className="barre" striped variant="info" now={80} />
        </div>
        <div>
          <h2>JAVASCRIPT</h2>
          <ProgressBar className="barre" striped variant="warning" now={60} />
        </div>
        <div>
          <h2>REACT</h2>
          <ProgressBar className="barre" striped variant="danger" now={50} />
        </div>
      </div>
    </div>
  );
}

export default Apropos;
