import React, { useState } from "react";
import Footer from "../Footer";
import HomePage from "../Homepage";
import Navbar from "../Navbar";
import Services from "../services";
import Sidebar from "../Sidebar";
import AboutUs from "../About";
import whatsApp from "../../assets/Whatsapp.svg";
import ChooseUs from "../choose";
import { Image } from "./Elements";
import Customer from "../Customer";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HomePage />
      <AboutUs />
      <Services />
      <ChooseUs />
      <Customer />

      <Footer />

      <Image onClick={() => {}} src={whatsApp} />
    </>
  );
};

export default Home;
