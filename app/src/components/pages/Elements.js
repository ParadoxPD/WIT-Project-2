import styled from "styled-components";

export const Image = styled.img`
  position: fixed;
  cursor: pointer;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: transparent;
  color: #fff;
  text-align: center;
  font-size: 30px;
  z-index: 100;
  transform: scale(1.5);

  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(2);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
