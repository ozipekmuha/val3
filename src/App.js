import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Apropos from "./components/A propos";
import Accueil from "./components/Accueil";
import Api from "./components/Api";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Mention from "./components/MantionLégal";
import Realisation from "./components/Réalisation";
import Services from "./components/Service";

function App() {
  return (
    <div className="App img">
      <Routes>
        <Route path="/" element={<Accueil></Accueil>} />
        <Route path="/Blog" element={<Blog></Blog>} />
        <Route path="/Apropos" element={<Apropos></Apropos>} />
        <Route path="/Réalisation" element={<Realisation></Realisation>} />
        <Route path="/MentionLégale" element={<Mention></Mention>} />
        <Route path="/Contact" element={<Contact></Contact>} />
        <Route path="/Services" element={<Services></Services>} />
        <Route path="/Api" element={<Api></Api>} />
      </Routes>
    </div>
  );
}

export default App;
