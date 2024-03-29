import React, { useState } from "react";
import ServicesImage from "../../assets/services-heading.svg";
import DetailingImage from "../../assets/services/detailing.svg";
import TreatmentImage from "../../assets/services/treatment.svg";
import BodyShopImage from "../../assets/services/bodyshop.svg";
import image from "../../assets/services/services-footer.svg";
import Modal from "../ServicesModal";
import ModalDataset from "./servicesDesc";
import {
  ServicesContainer,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesH1Wrapper,
  ServicesDesc,
  ServicesHeading,
  ServicesImg,
  ServicesDiv,
  ServicesGroupHeading,
  ServicesGroupImg,
  ServicesFooterWrapper,
  ServicesFooter,
} from "./ServicesElements";

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalDataName, setModalDataName] = useState("");

  const openModal = (e) => {
    const modalName = e.target.parentElement.lastChild.firstChild.innerText;
    console.log(modalName);
    if (
      !showModal &&
      modalName !== undefined &&
      modalName !== "" &&
      modalName !== null
    ) {
      setModalDataName(modalName);
      setShowModal(true);
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    if (showModal) {
      setShowModal(false);
      document.body.style.overflow = "unset";
    }
  };

  return (
    <ServicesContainer id="services">
      <Modal
        showModal={showModal}
        closeModal={closeModal}
        modalData={ModalDataset[modalDataName]}
      />
      <ServicesH1Wrapper>
        <ServicesHeading>
          <ServicesImg src={ServicesImage} />
        </ServicesHeading>
      </ServicesH1Wrapper>
      <ServicesWrapper>
        <ServicesGroupHeading>
          <ServicesGroupImg src={DetailingImage} />
        </ServicesGroupHeading>

        <ServicesDiv>
          <ServicesCard onClick={openModal}>
            <ServicesIcon
              src={require("../../assets/services/detailing/car wash image.jpg")}
            />
            <ServicesDesc>
              <ServicesH2>Car Wash</ServicesH2>
            </ServicesDesc>
          </ServicesCard>
          <ServicesCard onClick={openModal}>
            <ServicesIcon
              src={require("../../assets/services/detailing/car_polishing.jpg")}
            />
            <ServicesDesc>
              <ServicesH2>Car Polishing</ServicesH2>
            </ServicesDesc>
          </ServicesCard>
          <ServicesCard onClick={openModal}>
            <ServicesIcon
              src={require("../../assets/services/detailing/ceramic_coating.jpg")}
            />
            <ServicesDesc>
              <ServicesH2>Ceramic Coating</ServicesH2>
            </ServicesDesc>
          </ServicesCard>
          <ServicesCard onClick={openModal}>
            <ServicesIcon
              src={require("../../assets/services/detailing/paint_protection_film_(PPF).jpg")}
            />
            <ServicesDesc>
              <ServicesH2>Paint Protection Film(PPF)</ServicesH2>
            </ServicesDesc>
          </ServicesCard>
        </ServicesDiv>
        <ServicesGroupHeading
          style={{
            justifyContent: "center",
            transform: "scale(0.8)",
          }}
        >
          <ServicesGroupImg src={TreatmentImage} />
        </ServicesGroupHeading>
        <ServicesDiv>
          <ServicesCard onClick={openModal}>
            <ServicesIcon
              src={require("../../assets/services/treatment/ac_vent_repair.jpg")}
            />
            <ServicesDesc>
              <ServicesH2>AC Vent Repair</ServicesH2>
            </ServicesDesc>
          </ServicesCard>
          <ServicesCard onClick={openModal}>
            <ServicesIcon
              src={require("../../assets/services/treatment/alloy_wheel_treatment.jpg")}
            />
            <ServicesDesc>
              <ServicesH2>Alloy Wheel Treatment</ServicesH2>
            </ServicesDesc>
          </ServicesCard>
          <ServicesCard onClick={openModal}>
            <ServicesIcon
              src={require("../../assets/services/treatment/head_light_restoration.jpg")}
            />
            <ServicesDesc>
              <ServicesH2>HeadLight Restoration</ServicesH2>
            </ServicesDesc>
          </ServicesCard>
          <ServicesCard onClick={openModal}>
            <ServicesIcon
              src={require("../../assets/services/treatment/hyegiene_interior_clean.jpg")}
            />
            <ServicesDesc>
              <ServicesH2>Hygiene Interior Clean</ServicesH2>
            </ServicesDesc>
          </ServicesCard>
          <ServicesCard onClick={openModal}>
            <ServicesIcon
              src={require("../../assets/services/treatment/leather_protection_and_conditioning.jpg")}
            />
            <ServicesDesc>
              <ServicesH2>Leather Protection and Conditioning</ServicesH2>
            </ServicesDesc>
          </ServicesCard>
          <ServicesCard onClick={openModal}>
            <ServicesIcon
              src={require("../../assets/services/treatment/paint_refinement.webp")}
            />
            <ServicesDesc>
              <ServicesH2>Paint Refinement</ServicesH2>
            </ServicesDesc>
          </ServicesCard>
          <ServicesCard onClick={openModal}>
            <ServicesIcon
              src={require("../../assets/services/treatment/paint_restoration.jpg")}
            />
            <ServicesDesc>
              <ServicesH2>Paint Restoration</ServicesH2>
            </ServicesDesc>
          </ServicesCard>
          <ServicesCard onClick={openModal}>
            <ServicesIcon
              src={require("../../assets/services/treatment/under_body_antirust_coating.jpg")}
            />
            <ServicesDesc>
              <ServicesH2>Under Body Anti-rust Coating</ServicesH2>
            </ServicesDesc>
          </ServicesCard>

          <ServicesCard onClick={openModal}>
            <ServicesIcon
              src={require("../../assets/services/treatment/wind_sheild_glass_treatment.jpg")}
            />
            <ServicesDesc>
              <ServicesH2>Windshield Glass Treatment</ServicesH2>
            </ServicesDesc>
          </ServicesCard>
        </ServicesDiv>
        <ServicesGroupHeading>
          <ServicesGroupImg src={BodyShopImage} />
        </ServicesGroupHeading>
        <ServicesDiv>
          <ServicesCard onClick={openModal}>
            <ServicesIcon
              src={require("../../assets/services/bodyshop/car_damping.jpg")}
            />
            <ServicesDesc>
              <ServicesH2>Car Damping</ServicesH2>
            </ServicesDesc>
          </ServicesCard>
          <ServicesCard onClick={openModal}>
            <ServicesIcon
              src={require("../../assets/services/bodyshop/car_painting.jpg")}
            />
            <ServicesDesc>
              <ServicesH2>Car Painting</ServicesH2>
            </ServicesDesc>
          </ServicesCard>
          <ServicesCard onClick={openModal}>
            <ServicesIcon
              src={require("../../assets/services/bodyshop/chasis_repair.jpg")}
            />
            <ServicesDesc>
              <ServicesH2>Chasis Repair</ServicesH2>
            </ServicesDesc>
          </ServicesCard>
          <ServicesCard onClick={openModal}>
            <ServicesIcon
              src={require("../../assets/services/bodyshop/dent_reapir.jpg")}
            />
            <ServicesDesc>
              <ServicesH2>Dent Repair</ServicesH2>
            </ServicesDesc>
          </ServicesCard>
          <ServicesCard className={"placeholder"}>
            <ServicesIcon
              src={require("../../assets/services/bodyshop/major_car_accident repair.jpg")}
            />
            <ServicesDesc>
              <ServicesH2>Major Car Accident Repair</ServicesH2>
            </ServicesDesc>
          </ServicesCard>
          <ServicesCard onClick={openModal}>
            <ServicesIcon
              src={require("../../assets/services/bodyshop/major_car_accident repair.jpg")}
            />
            <ServicesDesc>
              <ServicesH2>Major Car Accident Repair</ServicesH2>
            </ServicesDesc>
          </ServicesCard>
          <ServicesCard onClick={openModal}>
            <ServicesIcon
              src={require("../../assets/services/bodyshop/mig_welding.jpg")}
            />
            <ServicesDesc>
              <ServicesH2>MIG Welding</ServicesH2>
            </ServicesDesc>
          </ServicesCard>
        </ServicesDiv>
      </ServicesWrapper>
      <ServicesFooterWrapper>
        <ServicesFooter src={image} />
      </ServicesFooterWrapper>
    </ServicesContainer>
  );
};

export default Services;
