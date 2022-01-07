import styled from "styled-components";
import { colorScheme } from "../../global";

export const CustomerContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${colorScheme.black};
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (max-width: 1080px) {
    margin-top: 0px;
    height: 40vh;
  }
`;
export const CustomerH1 = styled.h1`
  color: ${colorScheme.white};
  font-size: 4rem;
`;
export const CustomerWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  width: 80%;
`;
export const CustomerCardWrapper = styled.div`
  width: 35vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* padding: 28px; */
`;

export const CustomerCard = styled.div`
  background-color: #1d1d1d;
  display: flex;
  flex-direction: column;
  padding: 20px;
  /* margin-bottom: 15px; */
`;

export const CustomerName = styled.div`
  color: ${colorScheme.white};
  align-self: flex-end;
`;

export const CustomerDesc = styled.p`
  color: ${colorScheme.white};
`;

export const CustomerImage = styled.img`
  width: 35vw;
`;
