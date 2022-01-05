import styled, { keyframes } from "styled-components";
import { colorScheme } from "../../global";

export const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${colorScheme.black};
  position: relative;
  overflow: hidden;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 3rem;
  margin-left: 15px;
  position: absolute;
  top: 50px;
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
export const HeroH2 = styled.h1`
  color: ${colorScheme.white};
  font-size: 2.3rem;
  margin-left: 15px;
  width: 80vw;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-30%);
  @media screen and (max-width: 960px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
  span {
    color: ${colorScheme.white};
    display: block;
    font-size: 3.4rem;
    @media screen and (max-width: 960px) {
      font-size: 2.5rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

// export const HeroCaption = styled.h1`
//   color: #fff;
//   font-size: 3rem;
//   margin-left: 15px;
//   position: absolute;
//   top: 200px;
//   left: 50%;

//   @media screen and (max-width: 960px) {
//     font-size: 2.5rem;
//   }

//   @media screen and (max-width: 768px) {
//     font-size: 2rem;
//   }
//   span {
//     display: block;
//     font-size: 4.8rem;
//     @media screen and (max-width: 960px) {
//       font-size: 4rem;
//     }

//     @media screen and (max-width: 768px) {
//       font-size: 3.5rem;
//     }
//   }
// `;

export const HeroImage = styled.img`
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
`;

const slideOut = keyframes` 
from { transform: translate(0); }
to { transform: translate(-1000px);}
 `;

export const Slider = styled.div`
  /* opacity: 1; */
  transform: translate(1000px);
  /* transform: scale(0.8); */
  transition-duration: 0.8s ease-in;
  /* position: absolute; */
  /* top: 0; */
  /* left: 500px; */
  animation: ${slideOut} 0.8s ease-out 1;
  &.active {
    /* opacity: 1; */
    transform: translateX(0);
    transition-duration: 0.8s;
    /* left: 0; */
    /* transform: scale(1); */
  }
`;
