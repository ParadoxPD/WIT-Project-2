import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import ReactDOM from "react-dom";
import FormTemplates from "./FormTemplates";
import {
  FormGroup,
  FormContainer,
  FormInput,
  FormLabel,
  StyledFieldset,
  FormInputArea,
  FormWrapper,
  FormContent,
  CloseFormButton,
  Background,
  FormNavContainer,
  SubmitBtn,
  SubmitBtnWrapper,
} from "./FormElements";

const Form = ({ showForm, closeForm, formType }) => {
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showForm ? 1 : 0,
    transform: showForm ? `translateY(0%)` : `translateY(-100%)`,
  });

  const [formTypeData, changeFormTypeData] = useState(formType);

  const handleType = (e) => {};

  const typeChangeHandler = (e) => {
    let newType = e.target.value;

    if (newType === "homecollection") {
      changeFormTypeData("Home Collection");
    } else if (newType === "directapproach") {
      changeFormTypeData("Direct Approach");
    } else if (newType === "doctorconsultancy") {
      changeFormTypeData("Doctor Consultancy");
    }
  };

  const formSubmitHandler = (e) => {};

  return (
    <>
      {showForm
        ? ReactDOM.createPortal(
            <>
              <Background>
                <animated.div style={animation}>
                  <FormWrapper>
                    <FormNavContainer>
                      <CloseFormButton
                        aria-label="Close Form"
                        onClick={closeForm}
                      />
                    </FormNavContainer>

                    <FormContent>
                      <FormContainer>
                        <FormGroup style={{ justifyContent: "space-between" }}>
                          <div style={{ display: "block" }}>
                            <FormLabel>Name </FormLabel>
                            <FormInput></FormInput>
                          </div>
                          <div>
                            <FormLabel>Age </FormLabel>
                            <FormInput></FormInput>
                          </div>
                        </FormGroup>

                        <FormGroup>
                          <StyledFieldset style={{ maxWidth: "300px" }}>
                            <legend>Gender</legend>
                            <label>
                              <input
                                type="radio"
                                value="female"
                                name="gender"
                                // checked={state.gender === "female"}
                                onChange={() => {}}
                              />
                              Female
                            </label>
                            <label>
                              <input
                                type="radio"
                                value="male"
                                name="gender"
                                // checked={state.gender === "male"}
                                onChange={() => {}}
                              />
                              Male
                            </label>
                          </StyledFieldset>
                        </FormGroup>
                        <FormGroup>
                          <FormLabel>Mobile No. </FormLabel>
                          <FormInput></FormInput>
                        </FormGroup>
                        <FormGroup>
                          <FormLabel>Address </FormLabel>
                          <FormInputArea></FormInputArea>
                        </FormGroup>
                        <FormGroup>
                          <StyledFieldset
                            style={{
                              flexDirection: "column",
                              maxWidth: "500px",
                            }}
                          >
                            <legend>Appointment For</legend>
                            <label>
                              <input
                                type="radio"
                                value="homecollection"
                                name="appointmenttype"
                                checked={
                                  formTypeData === "Home Collection"
                                    ? "checked"
                                    : ""
                                }
                                // checked={state.gender === "female"}
                                onChange={typeChangeHandler}
                              />
                              Home Collection from Home
                            </label>
                            <label>
                              <input
                                type="radio"
                                value="directapproach"
                                name="appointmenttype"
                                // checked={state.gender === "male"}
                                checked={
                                  formTypeData === "Direct Approach"
                                    ? "checked"
                                    : ""
                                }
                                onChange={typeChangeHandler}
                              />
                              Sample Collection at Lab
                            </label>
                            <label>
                              <input
                                type="radio"
                                value="doctorconsultancy"
                                name="appointmenttype"
                                // checked={state.gender === "male"}
                                checked={
                                  formTypeData === "Doctor Consultancy"
                                    ? "checked"
                                    : ""
                                }
                                onChange={typeChangeHandler}
                              />
                              Doctor Consultancy
                            </label>
                          </StyledFieldset>
                        </FormGroup>
                        {FormTemplates[formTypeData]}
                        <SubmitBtnWrapper>
                          <SubmitBtn type="submit" onClick={formSubmitHandler}>
                            Make an Appointment
                          </SubmitBtn>
                        </SubmitBtnWrapper>
                      </FormContainer>
                    </FormContent>
                  </FormWrapper>
                </animated.div>
              </Background>
            </>,
            document.getElementById("portal-root")
          )
        : null}
    </>
  );
};

export default Form;
