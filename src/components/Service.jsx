import Serv from "../img/img/services-bg.jpg";
import Footer from "./Footer";
import Header from "./Header";

function Service() {
  return (
    <div>
      <Header></Header>
      <div className="service">
        <h1>Service</h1>
        <h2>Consultation en Stratégie Marketing :</h2>
        <li>Analyse approfondie de votre marché cible.</li>
        <li>Développement de stratégies marketing personnalisées.</li>
        <li>Suivi et ajustement des campagnes pour optimiser les résultats.</li>
        <h2>Formation en Gestion d'Entreprise :</h2>
        <li>Cours interactifs sur la gestion financière et opérationnelle.</li>
        <li>
          Accompagnement pour améliorer la rentabilité de votre entreprise.
        </li>
        <li>Conseils pratiques pour une gestion efficace des ressources.</li>
        <h2> Conseils en Développement Personnel :</h2>
        <li>
          Séances de coaching individuel pour améliorer vos compétences
          personnelles.
        </li>
        <li>
          Techniques de gestion du stress et développement de la confiance en
          soi.
        </li>
        <li>Plans d'action personnalisés pour atteindre vos objectifs.</li>
        <h2>Services de Consultation en Innovation Technologique :</h2>
        <li>Évaluation des besoins technologiques de votre entreprise.</li>
        <li>Recommandations pour l'adoption de nouvelles technologies.</li>
        <li>Accompagnement dans la mise en place de solutions innovantes.</li>
        <h2>Conférences et Ateliers sur l'Entrepreneuriat :</h2>
        <li>Interventions inspirantes sur l'esprit d'entrepreneuriat.</li>
        <li>
          Ateliers interactifs pour stimuler la créativité et l'innovation.
        </li>
        <li>
          Partage d'expériences pour motiver et guider les futurs entrepreneurs.
        </li>
        <img src={Serv} alt="service" className="serv" />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Service;
