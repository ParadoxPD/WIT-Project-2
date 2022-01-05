import React from "react";
import { colorScheme } from "../../global";
import {
  ChooseUsContainer,
  ChooseUsWrapper,
  Heading,
  ChooseUsCardsWrapper,
  ChooseCard,
  CardIcon,
  CardDesc,
  CardH2,
} from "./ChooseUSElements";

import image1 from "../../assets/choose/on-time.svg";
import image2 from "../../assets/choose/multi-service.svg";
import image3 from "../../assets/choose/experience.svg";
import image4 from "../../assets/choose/authentic.svg";
import image5 from "../../assets/choose/heart.svg";
import image6 from "../../assets/choose/money.svg";

const ChooseUs = () => {
  return (
    <ChooseUsContainer id="choose">
      <ChooseUsWrapper>
        <Heading>
          <span style={{ display: "block", fontSize: "3.5rem" }}>Why</span>
          <span style={{ color: `${colorScheme.yellow}` }}>Choose</span>
          <span>Us?</span>
        </Heading>
        <ChooseUsCardsWrapper>
          <ChooseCard>
            <CardIcon src={image1} />
            <CardDesc>
              <CardH2>On Time Service</CardH2>
            </CardDesc>
          </ChooseCard>

          <ChooseCard>
            <CardIcon src={image2} />
            <CardDesc>
              <CardH2>Multi-Service Under One Roof</CardH2>
            </CardDesc>
          </ChooseCard>
          <ChooseCard>
            <CardIcon src={image3} />
            <CardDesc>
              <CardH2>Years of Experience</CardH2>
            </CardDesc>
          </ChooseCard>
          <ChooseCard>
            <CardIcon src={image4} />
            <CardDesc>
              <CardH2>Authentic Product Use</CardH2>
            </CardDesc>
          </ChooseCard>
          <ChooseCard>
            <CardIcon src={image5} />
            <CardDesc>
              <CardH2>100% Warranty on Service</CardH2>
            </CardDesc>
          </ChooseCard>
          <ChooseCard>
            <CardIcon src={image6} />
            <CardDesc>
              <CardH2>Affordable Price</CardH2>
            </CardDesc>
          </ChooseCard>
        </ChooseUsCardsWrapper>
      </ChooseUsWrapper>
    </ChooseUsContainer>
  );
};

export default ChooseUs;
