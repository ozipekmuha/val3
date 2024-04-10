import React, { useEffect, useState } from "react";
import Api from "./Api";

function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fond">
      <div className="footer">
        <div className="footer-column">
          <h2>Données</h2>
          <Api />
          <a href="/MentionLégale">Mantion Légale</a>
        </div>
        <div className="footer-column">
          <h2>Pages</h2>
          <a href="./Contact.jsx">Contact</a>
          <a href="./Service.jsx">Services</a>
        </div>
        <div className="footer-column">
          <h2>Réalisations</h2>
          <a href="./Réalisation.jsx">Site de relaxation</a>
          <a href="./Réalisation.jsx">Site supermarché</a>
          <a href="./Réalisation.jsx">Restaurant japonais</a>
        </div>
        <div className="footer-column">
          <h2>Blog</h2>
          <a href="./Blog.jsx">Coder</a>
          <a href="./Blog.jsx">Croissance</a>
          <a href="./Blog.jsx">Google</a>
          <a href="./Blog.jsx">Screens</a>
          <a href="./Blog.jsx">SEO</a>
          <a href="./Blog.jsx">Technos</a>
        </div>
      </div>
      <div className="copy">
        <div className="texte">&copy; 2023</div>
        {showButton && (
          <a href="#top" className="back-to-top" onClick={scrollToTop}>
            Haut de page
          </a>
        )}
      </div>
    </div>
  );
}

export default Footer;
