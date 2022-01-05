import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;

  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const FormWrapper = styled.div`
  width: 65vw;
  height: 80vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  /* position: relative; */
  /* z-index: 40; */
  justify-self: center;
  align-self: center;
  overflow-y: scroll;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: black;
  h1 {
    color: black;
  }
  transition: all 0.3s ease-in-out;
`;

export const CloseFormButton = styled(MdClose)`
  cursor: pointer;
  width: 32px;
  height: 32px;
  padding: 0;
  margin-right: 20px;
  z-index: 10;
`;

export const FormNavContainer = styled.nav`
  height: 40px;
  width: 100%;
  background-color: #fffdcb;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: sticky;
  top: 0;
`;

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  /* overflow-y: scroll; */
`;

export const FormGroup = styled.div`
  margin: 30px;
  padding: 40px 20px 40px 20px;
  background: #ffffff;
  box-shadow: 5px 9px 10px -3px rgba(0, 0, 0, 0.1);
  display: flex;
`;

export const FormLabel = styled.label`
  display: inline-block;
  padding: 20px;
`;

export const FormInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  outline: none;

  &:focus::-webkit-input-placeholder {
    transition: text-indent 0.4s 0.4s ease;
    text-indent: -100%;
    opacity: 1;
  }
`;
export const FormInputArea = styled.textarea`
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  resize: none;
  width: 300px;
  height: 40px;
  &:focus::-webkit-input-placeholder {
    transition: text-indent 0.4s 0.4s ease;
    text-indent: -100%;
    opacity: 1;
  }
`;

export const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
  display: flex;

  legend {
    padding: 0 10px;
  }
  label {
    padding-right: 20px;
  }
  input {
    margin-right: 10px;
  }
`;

export const SubmitBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const SubmitBtn = styled.button`
  display: flex;
  background-color: #f7797d;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  margin: 40px;
  padding: 0 20px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`;

const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;
