import React from "react";
import "./Widjet.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widjet() {
  const newsArticle = (heading, subtitle) => (
    <article className="widjets__article">
      <div className="widjets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widjets__articleRight">
        <h2>{heading}</h2>
        <p>{subtitle}</p>
      </div>
    </article>
  );

  return (
    <section className="widjets">
      <div className="widjets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "Digimon Franchise Gets New Fall TV Anime, New Digimon Adventure 02 Film",
        "Top News - 9.9k readers"
      )}
      {newsArticle(
        "Demon Slayer realeased date changed!",
        "Hot - 300k readers"
      )}
      {newsArticle(
        "Fena: Pirate Princess to be aired on 14-08-21",
        "Shows - 10k readers"
      )}
    </section>
  );
}

export default Widjet;
