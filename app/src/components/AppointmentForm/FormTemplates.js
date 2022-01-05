import React from "react";
import {
  FormGroup,
  FormContainer,
  FormInput,
  FormLabel,
  StyledFieldset,
  FormInputArea,
} from "./FormElements";

const HomeCollection = (
  <>
    <FormGroup style={{ justifyContent: "space-between" }}>
      <div style={{ display: "block" }}>
        <FormLabel>Time </FormLabel>
        <FormInput></FormInput>
      </div>
      <div>
        <FormLabel>Appointment Date</FormLabel>
        <FormInput></FormInput>
      </div>
    </FormGroup>
  </>
);

const DirectApproach = (
  <>
    <FormGroup style={{ justifyContent: "space-between" }}>
      <div style={{ display: "block" }}>
        <FormLabel>Time </FormLabel>
        <FormInput></FormInput>
      </div>
      <div>
        <FormLabel>Appointment Date</FormLabel>
        <FormInput></FormInput>
      </div>
    </FormGroup>
  </>
);

const DoctorConsultancy = (
  <>
    <FormGroup>
      <StyledFieldset
        style={{
          flexDirection: "column",
          maxWidth: "500px",
        }}
      >
        <legend>Choose Department</legend>
        <label>
          <input
            type="radio"
            value="neurology"
            name="department"
            // checked={formTypeData === "Home Collection" ? "checked" : ""}
            // // checked={state.gender === "female"}
            // onChange={typeChangeHandler}
          />
          NEUROLOGY
        </label>
        <label>
          <input
            type="radio"
            value="medicine"
            name="department"
            // checked={state.gender === "male"}
            // checked={formTypeData === "Direct Approach" ? "checked" : ""}
            // onChange={typeChangeHandler}
          />
          MEDICINE
        </label>
        <label>
          <input
            type="radio"
            value="pediatrics"
            name="department"
            // checked={state.gender === "male"}
            // checked={formTypeData === "Doctor Consultancy" ? "checked" : ""}
            // onChange={typeChangeHandler}
          />
          PEDIATRICS
        </label>
        <label>
          <input
            type="radio"
            value="surgeon"
            name="department"
            // checked={state.gender === "male"}
            // checked={formTypeData === "Doctor Consultancy" ? "checked" : ""}
            // onChange={typeChangeHandler}
          />
          SURGEON
        </label>
      </StyledFieldset>
    </FormGroup>
    <FormGroup>
      <FormLabel>Doctor Name</FormLabel>
      <FormInput></FormInput>
    </FormGroup>
  </>
);

const Appointment = <></>;

const FormTemplates = {
  "Home Collection": HomeCollection,
  "Direct Approach": DirectApproach,
  "Doctor Consultancy": DoctorConsultancy,
  Appointment: Appointment,
};

export default FormTemplates;
