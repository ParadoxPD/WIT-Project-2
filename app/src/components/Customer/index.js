import React from "react";
import {
  CustomerContainer,
  CustomerH1,
  CustomerWrapper,
  CustomerCardWrapper,
  CustomerCard,
  CustomerImage,
  CustomerDesc,
  CustomerName,
} from "./CustomerElements";

import image from "../../assets/first-time-car-buyer.png";

const Customer = () => {
  return (
    <CustomerContainer>
      <CustomerH1>From Our Happy Customers</CustomerH1>
      <CustomerWrapper>
        <CustomerCardWrapper>
          <CustomerCard style={{ marginBottom: "15px" }}>
            <CustomerDesc>
              "The car wash is fast,friendly and does an awesome work in a less
              amount of time and price"
            </CustomerDesc>
            <CustomerName>T. Mohanty</CustomerName>
          </CustomerCard>
          <CustomerCard>
            <CustomerDesc>
              "The best Car Servicers out in the town, unmatched quality service
              and great customer satisfaction, within minimum time limit."
            </CustomerDesc>
            <CustomerName>S. Mohapatra</CustomerName>
          </CustomerCard>
        </CustomerCardWrapper>
        <CustomerImage src={image} />
      </CustomerWrapper>
    </CustomerContainer>
  );
};

export default Customer;
