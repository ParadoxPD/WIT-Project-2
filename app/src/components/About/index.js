import React from "react";
import image from "../../assets/worker.png";

import {
  AboutContainer,
  AboutH1Wrapper,
  AboutH1,
  AboutWrapper,
  AboutP,
  AboutImg,
} from "./AboutElements";

const AboutUs = () => {
  return (
    <AboutContainer id="about">
      <AboutH1Wrapper>
        <AboutH1>About Us</AboutH1>
      </AboutH1Wrapper>
      <AboutWrapper>
        <AboutP>
          PROFESSIONAL CAR SPA is a car detailing and body shop work centre.
          PROFESSIONAL CAR SPA is first of its kind in the entire region, which
          gives you single roof solution to multiple requirements of car's.
          Right from the decision of making it a new car purchase, various
          treatment to keep your car looking new throughout its life span,
          periodical service requirement, accidental repair shop, bunch of
          accessories to choose from, yearly insurance renewal and most
          importantly dealing in branded tyres, which are the most important
          part of the car. By doing so have tried that all our customers meet
          their all requirements under single roof, which ultimately saves times
          from moving places to places for various requirements. We make car
          looks better than new. We provide international standard quality
          services with affordable price.
        </AboutP>
        <AboutImg src={image} />
      </AboutWrapper>
    </AboutContainer>
  );
};

export default AboutUs;
