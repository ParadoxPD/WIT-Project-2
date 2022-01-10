import styled from "styled-components";
import { colorScheme } from "../../global";

export const ServicesContainer = styled.div`
  /* height: 800px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colorScheme.black};
  width: 100%;
  overflow: hidden;
  @media screen and (max-width: 1080px) {
    /* margin-left: 40px;
    margin-right: 40px; */
  }
`;

export const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`;

export const ServicesDiv = styled.div`
  max-width: 100%;
  margin: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media screen and (max-width: 1080px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #353738;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border-radius: 0px; */
  height: 160px;
  width: 256px;
  /* padding-bottom: 30px; */
  margin: 20px 20px;
  cursor: pointer;

  box-shadow: 11px 12px 14px -4px rgba(0, 0, 0, 0.25),
    -8px -8px 6px -15px #ffffff;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 1080px) {
    height: 175px;
    width: 280px;

    &.placeholder {
      visibility: hidden;
      pointer-events: none;
      display: none;
    }
  }

  &.placeholder {
    visibility: hidden;
    pointer-events: none;
  }
`;

export const ServicesIcon = styled.img`
  width: 100%;
  margin: 0px;
  height: 140px;
  object-fit: cover;
  overflow: hidden;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: black;
  padding-top: 20px;
`;

export const ServicesH1Wrapper = styled.div`
  display: flex;
  align-self: flex-start;
  width: 100%;
`;

export const ServicesHeading = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  height: 100px;
`;
export const ServicesGroupHeading = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  margin-top: 30px;
  margin-bottom: 30px;
  justify-content: flex-start;
  flex-direction: row;
  align-content: flex-start;
`;

export const ServicesImg = styled.img`
  display: flex;
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: -22%;
  transform: scale(0.6);
`;
export const ServicesGroupImg = styled.img`
  display: flex;
  width: 100%;

  object-fit: contain;
  /* position: absolute; */
  background-size: contain;
  background-repeat: no-repeat;
  width: 30vw;
  /* top: 0;
  left: 0; */
`;

export const ServicesH2 = styled.h2`
  font-size: 0.9rem;
  color: ${colorScheme.white};

  text-align: center;
  @media screen and (max-width: 1080px) {
    font-size: 0.9rem;
  }
`;

export const ServicesDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 100px;
`;

export const ServicesFooterWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;
`;

export const ServicesFooter = styled.img`
  background-size: contain;
  background-repeat: no-repeat;
  width: 400px;
`;
