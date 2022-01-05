import styled from "styled-components";
import { colorScheme } from "../../global";

export const ChooseUsContainer = styled.div`
  background-color: ${colorScheme.black};
  margin-top: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 40px;
`;

export const ChooseUsWrapper = styled.div`
  display: flex;
  background-color: #1d1d1d;
  flex-direction: column;
  width: 50vw;
  height: 80vh;
  padding: 20px;
`;

export const Heading = styled.h1`
  color: ${colorScheme.white};
  span {
    padding-right: 10px;
    font-size: 2.5rem;
  }
`;

export const ChooseUsCardsWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const ChooseCard = styled.div`
  background: #353738;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border-radius: 0px; */
  height: 150px;
  width: 140px;
  /* padding-bottom: 30px; */
  margin: 20px 20px;

  box-shadow: 11px 12px 14px -4px rgba(0, 0, 0, 0.25),
    -8px -8px 6px -15px #ffffff;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    height: 220px;
    width: 270px;
  }
`;

export const CardIcon = styled.img`
  width: 100%;
  margin: 0px;
  height: 140px;
  object-fit: scale-down;
  overflow: hidden;
`;

export const CardH2 = styled.h2`
  font-size: 0.6rem;
  color: ${colorScheme.white};

  @media screen and (max-width: 768px) {
    font-size: 0.5rem;
    margin-bottom: 0;
  }
`;

export const CardDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 100px;
  width: 100%;
  background-color: ${colorScheme.orange};

  @media screen and (max-width: 768px) {
    max-height: 80px;
  }
`;
