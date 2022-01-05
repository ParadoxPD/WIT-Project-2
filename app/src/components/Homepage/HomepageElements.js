import styled from "styled-components";
import { colorScheme } from "../../global";

export const HeroContainer = styled.div`
  height: 100vh;
  /* width: 100vw; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${colorScheme.black};
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 3rem;
  margin-left: 15px;
  position: absolute;
  top: 30%;
  left: 5%;

  @media screen and (max-width: 960px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
  span {
    display: block;
    font-size: 4.8rem;
    @media screen and (max-width: 960px) {
      font-size: 4rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 3.5rem;
    }
  }
`;

export const HeroImage = styled.img`
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
`;

export const Slider = styled.div`
  opacity: 0;
  /* transform: translate(100px, 0); */
  transform: scale(0.8);
  transition-duration: 0.6s ease-in;
  &.active {
    opacity: 1;
    /* transform: translate(0, 0); */
    transition-duration: 0.6s;
    transform: scale(1);
  }
`;
