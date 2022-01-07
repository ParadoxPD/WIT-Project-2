import styled from "styled-components";
import { colorScheme } from "../../global";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const ModalWrapper = styled.div`
  width: 70vw;
  height: 70vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: ${colorScheme.black};
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-self: center;
  z-index: 100;
  @media screen and (max-width: 1080px) {
    width: 80vw;
    height: 60vh;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  transition: all 0.3s ease-in-out;
`;

export const CloseModalButton = styled.img`
  cursor: pointer;
  color: ${colorScheme.white};
  width: 32px;
  height: 32px;
  padding: 0;
  margin-right: 20px;
  z-index: 10;
  margin-left: 10px;
  transform: scale(0.6);

  @media screen and (max-width: 1080px) {
    transform: scale(0.8);
    margin-left: 10px;
    margin-top: 10px;
  }
`;

export const ModalNavContainer = styled.nav`
  height: 40px;
  width: 100%;
  background-color: ${colorScheme.black};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: sticky;
  top: 0;
  z-index: 200;
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 20px;
  @media screen and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
  }

  .video-player {
    margin-left: 40px;
    margin-right: 40px;

    @media screen and (max-width: 1080px) {
      height: 100% !important;
    }
  }
`;

export const ModalImage = styled.img`
  width: 36vw;
  margin: 40px;
`;
export const ModalDesc = styled.div`
  display: flex;
  flex-direction: column;
  width: 45vw;
  margin-right: 30px;
`;
export const ModalH1 = styled.h1`
  color: ${colorScheme.white};
  font-size: 2.6rem;
`;
export const ModalP = styled.p`
  color: ${colorScheme.white};
`;
