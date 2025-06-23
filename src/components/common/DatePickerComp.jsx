import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import { Form, Button, Container } from "react-bootstrap";
import { FcEnteringHeavenAlive } from "react-icons/fc";
import { TbDoorEnter } from "react-icons/tb";

const DatePickerComp = ({
  item,
  onApply,
  selectedDate,
  handleSelectedDate,
  id,
}) => {
  const dateRef = useRef(null);
  // console.log("DatePicker...........", item,id)
  return (
    // <Container className="mt-4" >
    <div
      className="d-flex justify-content-center w-50"
      style={{ marginTop: "-1.25rem" }}
    >
      <Form className="mx-2 mt-3">
        <Form.Group controlId="formDatePicker">
          <DatePicker
            ref={dateRef}
            id={id}
            selected={id === item.id && selectedDate}
            onChange={(date) => handleSelectedDate(date)}
            className="form-control w-100 p-1"
            dateFormat="dd/MM/yyyy"
            placeholderText="Choose a date"
            style={{ display: "none" }}
          />
        </Form.Group>
      </Form>
      <Button
        className=" mt-0 mt-3"
        variant="outline-primary"
        onClick={() => onApply(item)}
        // disabled={selectedDate}
      >
        <TbDoorEnter />
      </Button>
    </div>

    // </Container>
  );
};

export default DatePickerComp;
