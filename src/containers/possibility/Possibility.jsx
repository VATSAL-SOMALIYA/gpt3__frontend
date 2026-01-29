import React from "react";
import "./possibility.css";
import Feature from "../../components/feature/Feature";
import Possibilities from "../../assets/possibilities.png";
const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility__features">
        <div className="gpt3__possibility-heading">
          <h1 className="gradient__text">
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h1>
          <p>Request Early Access to Get Started</p>
        </div>
        <div className="gpt3__possibility__feature-container">
          <Feature
            title="Improving end distrusts instantly "
            text="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
          />
          <Feature
            title="Become the tended active"
            text="Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
          />
          <Feature
            title="Message or am nothing"
            text="Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
          />
          <Feature
            title="Really boy law county"
            text="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
          />
        </div>
      </div>
      <div className="gpt3__possibility__description">
        <div className="gpt3__possibility__description-inner">
          <img src={Possibilities} alt="possibilities_image" />
          <div className="gpt3__possibility__description-content">
            <p>Request Early Access to Get Started</p>
            <h1 className="gradient__text">
              The possibilities are beyond your imagination
            </h1>
            <p>
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>
            <p>Request Early Access to Get Started</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Possibility;
