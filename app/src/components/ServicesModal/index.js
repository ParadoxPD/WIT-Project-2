import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import ReactDOM from "react-dom";
import ReactPlayer from "react-player/lazy";

import {
  ModalContainer,
  ModalWrapper,
  ModalContent,
  CloseModalButton,
  Background,
  ModalNavContainer,
  ModalImage,
  ModalDesc,
  ModalH1,
  ModalP,
} from "./ModalElements";
import closeButton from "../../assets/close-btn.svg";

const Modal = ({ showModal, closeModal, modalData }) => {
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transModal: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  // console.log(`../../assets/${modalData.src}`);

  return (
    <>
      {showModal
        ? ReactDOM.createPortal(
            <>
              <Background>
                <animated.div style={animation}>
                  <ModalWrapper>
                    <ModalNavContainer>
                      <CloseModalButton
                        aria-label="Close Modal"
                        onClick={closeModal}
                        src={closeButton}
                      />
                    </ModalNavContainer>
                    <ModalContent>
                      <ModalContainer>
                        {modalData.src.includes("videos") ? (
                          <ReactPlayer
                            // height="100%"
                            url={modalData.url}
                            className={"video-player"}
                          />
                        ) : (
                          <ModalImage
                            style={{ height: "36vh" }}
                            src={require(`../../assets/${modalData.src}`)}
                          />
                        )}
                        <ModalDesc>
                          <ModalH1>{modalData.h1}</ModalH1>
                          <ModalP>{modalData.p}</ModalP>
                        </ModalDesc>
                      </ModalContainer>
                    </ModalContent>
                  </ModalWrapper>
                </animated.div>
              </Background>
            </>,
            document.getElementById("portal-root")
          )
        : null}
    </>
  );
};

export default Modal;
