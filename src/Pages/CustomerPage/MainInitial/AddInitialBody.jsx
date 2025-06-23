import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import PhoneCompCustomer from "./PhoneCompCustomer";

function AddInitialBody({ handleClose }) {
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

  // Watch specific field values (optional)
  const watchedValue = watch("name");

  const onSubmit = (data) => {
    const allData = { ...data, phone: phoneNumber };
    setInitialFormData(allData);
  };

  // console.log("Add initial body phone ....", phoneError);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
          Cancel
        </Button>
        <Button
          variant="outline-success"
          className="mx-2"
          onClick={() => handleClose()}
        >
          Refresh
        </Button>
        <Button variant="primary" className="" type="submit">
          Submit
        </Button>
      </div>
      <div>
        <Form.Label>{" Name"}</Form.Label>

        <InputGroup hasValidation className="mb-2 mt-0">
          <InputGroup.Text id="inputGroupPrepend">*</InputGroup.Text>

          <Form.Control
            style={{ maxWidth: "150px !important", margin: "0 auto" }}
            type="text"
            {...register("name", { required: "Name is required" })}
            placeholder="Enter your name"
            isInvalid={!!errors.name}
          />

          <Form.Control.Feedback type="invalid">
            {errors.name?.message}
          </Form.Control.Feedback>
        </InputGroup>
      </div>
      <div>
        <Form.Label>{" Email"}</Form.Label>

        <InputGroup hasValidation className="mb-2">
          <InputGroup.Text id="inputGroupPrepend">*</InputGroup.Text>

          <Form.Control
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            isInvalid={!!errors.email}
            placeholder="Enter your email"
          />
          <Form.Control.Feedback type="invalid">
            {errors.email?.message}
          </Form.Control.Feedback>
        </InputGroup>
      </div>

      <div>
        <Form.Label>{" Phone"}</Form.Label>

        <InputGroup className="mb-1" onClick={() => console.log("clicked")}>
          <InputGroup.Text id="inputGroupPrepend">*</InputGroup.Text>
          <Card>
            <PhoneCompCustomer
              setPhoneNumber={setPhoneNumber}
              phoneNumber={phoneNumber}
              setPhoneError={setPhoneError}
              defaultPhoneVal="+919769909978"
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
  );
}

export default AddInitialBody;
