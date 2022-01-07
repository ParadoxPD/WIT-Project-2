import styled from "styled-components";
import { Link } from "react-router-dom";
import { colorScheme } from "../../global";

export const AboutContainer = styled.div`
  /* height: 800px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colorScheme.black};
  margin-top: 40px;
  /* padding-left: 40px; */
  @media screen and (max-width: 1080px) {
    margin-top: 0px;
    margin-bottom: 120px;
    flex-direction: column;
    /* height: 100vh; */
  }
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* height: 400px; */
  width: 100%;
  justify-content: center;
  /* position: relative; */
  /* background: red; */
`;

export const AboutH1 = styled.h1`
  font-size: 4rem;
  font-weight: 400;
  color: ${colorScheme.white};

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const AboutH1Wrapper = styled.div`
  align-self: center;
  margin-left: 40px;
`;

export const AboutP = styled.p`
  color: ${colorScheme.white};
  font-size: 1rem;
  justify-self: center;
  align-self: center;
  width: 40vw;
  margin-left: 50px;
`;

export const AboutImg = styled.img`
  transform: scale(0.8);
  justify-self: flex-end;
  align-self: flex-end;
  width: 40vw;
  /* position: absolute; */
  /* bottom: 0; */
  /* right: 0; */
`;
