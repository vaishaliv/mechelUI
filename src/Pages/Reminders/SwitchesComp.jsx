import React from "react";
import { Form } from "react-bootstrap";
import SwitchComp from "./SwitchComp";

const SwitchesComp = ({
  handleOnChange,
  firstSwitch,
  secondSwitch,
  thirdSwitch,
  fourthSwitch,
}) => {
  const data = [
    {
      id: 1,
      label: "To Date Reminder",
      name: "toDate",
      checked: firstSwitch,
      handleChange: handleOnChange,
    },
    {
      id: 2,
      label: "Half Yearly Reminder",
      name: "halfYearly",
      checked: secondSwitch,
      handleChange: handleOnChange,
    },
    {
      id: 3,
      label: "Quarterly Reminder",
      name: "quarterly",
      checked: thirdSwitch,
      handleChange: handleOnChange,
    },
    {
      id: 4,
      label: "Monthly Reminder",
      name: "monthly",
      checked: fourthSwitch,
      handleChange: handleOnChange,
    },
  ];
  return (
    <div
    // style={{position:'fixed'}}
    >

    <Form
      className="d-flex justify-content-between p-3 text-success"
      
      >
      {data.map((d) => (
        <SwitchComp
        id={d.id}
        label={d.label}
        name={d.name}
        checked={d.checked}
        handleOnChange={d.handleChange}
        />
      ))}
    </Form>
      </div>
  );
};

export default SwitchesComp;
