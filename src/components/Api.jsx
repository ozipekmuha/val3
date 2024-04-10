import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const ProfileInfo = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/github-john-doe")
      .then((response) => response.json())
      .then((data) => setProfile(data));
  }, []);

  return (
    <div>
      <h2>{profile?.name}</h2>
      <p>{profile?.location}</p>
      <p className="texte">Télephone: 0787586823{profile?.phone}</p>
      <div className="lien">
        <a
          className="lien"
          href={profile?.html_url}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithub />
        </a>
        <a
          className="lien"
          href="https://twitter.com/johnDoe26676287"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaTwitter />
        </a>
        <a
          className="lien"
          href="https://fr.linkedin.com/company/johndoegame"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default ProfileInfo;
