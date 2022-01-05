import React, { useState, useEffect } from "react";
import { HeroContainer, HeroImage, HeroH1, Slider } from "./HomepageElements";

import image1 from "../../assets/ceramic_coating.png";
import image2 from "../../assets/hygiene_interior_clean.png";
import image3 from "../../assets/major_accident.png";
import image4 from "../../assets/PPF.png";
import image5 from "../../assets/Car.jpg";

const HomePage = () => {
  let [imageIndex, changeImageIndex] = useState(0);

  const images = [image1, image2, image3, image4, image5];
  useEffect(() => {
    const interval = setInterval(() => {
      imageIndex = imageIndex + 1;
      if (imageIndex == images.length) {
        imageIndex = 0;
      }
      changeImageIndex(imageIndex);
      console.log(imageIndex);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <HeroContainer id="home">
      {images.map((slide, index) => {
        return (
          <Slider
            className={index === imageIndex ? "slide active" : "slide"}
            key={index}
          >
            {index === imageIndex && (
              <HeroImage src={slide} alt="travel image" className="image" />
            )}
          </Slider>
        );
      })}
      <HeroH1>
        WELCOME TO <span>PROFESSIONAL CAR SPA</span>
      </HeroH1>
    </HeroContainer>
  );
};

export default HomePage;
