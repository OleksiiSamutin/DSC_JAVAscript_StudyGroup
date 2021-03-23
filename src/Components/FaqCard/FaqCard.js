import React from "react";
import "./FaqCard.css";
import illustrationWoman from "./images/illustration-woman-online-desktop.svg";
import bgPattern from "./images/bg-pattern-desktop.svg";
import Data from '../Data'
import Accordion from '../Accordion'
const FaqCard = () => {
  return (
    <div className="card__wrapper">
      <div className="image__wrapper">
        <div className="womanIllustration"></div>
        <img src={bgPattern} alt="" className="bgPattern" />
        {/* <img src={illustrationWoman} alt="" className="womanIllustration"/>
                    <img src={bgPattern} alt="" className="bgPattern"/> */}
      </div>
      <div className="faq__section">
        <h1>FAQ</h1>
        <div className="accordion__wrapper__section">

            { Data.map((props,id) => {
                return (
                    <Accordion {...props} key={id}/>
                )
            })}
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
