import React, { useRef, useState } from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import PhoneCompCustomer from "./PhoneCompCustomer";

const EditInitialBody = ({ customerData, handleClose }) => {
  const [validated, setValidated] = useState(false);

  const nameRef = useRef(customerData.name);
  const emailRef = useRef(customerData.email);
  const phoneRef = useRef(customerData.phone);

  const [phoneNumber, setPhoneNumber] = useState({
    country: "",
    number: "",
    code: "",
  });
  const [initialFormData, setInitialFormData] = useState({});
  const [phoneError, setPhoneError] = useState(null);

  const handlePhone = (value) => {
    setPhoneNumber(value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm();

  // const onSubmit = (data) => {
  //   console.log("Form Data:", phoneRef.current?.value, data); // Access all form values here
  // };

  const onSubmit = (data) => {
    const allData = { ...data, phone: phoneNumber };
    setInitialFormData(allData);
  };

  return (
    <>
      <Form
        className="px-2 w-100"
        noValidate
        validated={validated}
        // onSubmit={handleSubmit}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          className="d-flex justify-content-end p-2 m-2"
          style={{
            borderTop: "1px solid aliceblue",
            borderBottom: "1px solid aliceblue",
          }}
        >
          <Button
            variant="outline-warning"
            className=""
            onClick={() => handleClose()}
          >
            Close
          </Button>
          <Button
            variant="outline-success"
            className="mx-2"
            onClick={() => handleClose()}
          >
            Refresh
          </Button>
          <Button
            variant="primary"
            className=""
            type="submit"
            // onClick={() => {
            //   handleSubmit();
            // }}
          >
            Submit
          </Button>
        </div>
        <Form.Label>{" Name"}</Form.Label>
        <InputGroup hasValidation className="mb-3">
          <InputGroup.Text id="inputGroupPrepend">*</InputGroup.Text>

          <Form.Control
            ref={nameRef}
            value={nameRef.current?.value}
            name="name"
            required
            type="text"
            placeholder={customerData.name}
            {...register("name", { required: "Name is required" })}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name?.message}
          </Form.Control.Feedback>
        </InputGroup>

        <Form.Label>{" Email"}</Form.Label>
        <InputGroup hasValidation className="mb-3">
          <InputGroup.Text id="inputGroupPrepend">*</InputGroup.Text>

          <Form.Control
            ref={emailRef}
            value={emailRef.current?.value}
            name="email"
            required
            type="email"
            placeholder={customerData.email}
            defaultValue={customerData.email}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            Invalid email address.
          </Form.Control.Feedback>
        </InputGroup>

        <div>
          <Form.Label>{" Phone"}</Form.Label>

          <InputGroup className="mb-1" onClick={() => console.log("clicked")}>
            <InputGroup.Text id="inputGroupPrepend">*</InputGroup.Text>
            <Card>
              <PhoneCompCustomer
                setPhoneNumber={setPhoneNumber}
                phoneNumber={phoneNumber}
                setPhoneError={setPhoneError}
                defaultPhoneVal={customerData.phone}
              />
            </Card>
          </InputGroup>
          {phoneError && (
            <p
              className=""
              style={{ fontSize: "0.9rem", fontWeight: 400, color: "#dc3545" }}
            >
              Please enter a valid phone number
            </p>
          )}
        </div>
      </Form>
    </>
  );
};

export default EditInitialBody;
