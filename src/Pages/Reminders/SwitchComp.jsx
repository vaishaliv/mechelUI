import React from "react";
import { Form } from "react-bootstrap";

const SwitchComp = ({
  id,
  customClass = "custom-switch",
  type = "switch",
  label,
  name,
  checked,
  handleOnChange,
}) => {
  // console.log("=================================",id, label)
  return (
    <Form.Check
      className={customClass}
      type={type}
      label={label}
      name={name}
      checked={checked}
      onChange={() => handleOnChange(id)}
    />
  );
};

export default SwitchComp;
