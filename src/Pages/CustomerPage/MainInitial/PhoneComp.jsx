import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input-2";

import "react-phone-number-input/style.css";

const MyForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const [phone, setPhone] = useState("");

  const handlePhoneChange = (e, value) => {
    e.preventDefault();
    setPhone(value);
  };

  return (
    <div>
      <label htmlFor="phone-input">Phone Number</label>
      <Controller
        name="phone-input"
        control={control}
        rules={{
          validate: (value) => isValidPhoneNumber(value),
        }}
        render={({ field: { onChange, value } }) => (
          <PhoneInput
            country={"in"}
            value={phone}
            onChange={handlePhoneChange()}
            inputStyle={{
              width: "300px",
              padding: "10px",
              fontSize: "16px",
            }}
          />
        )}
      />
      {errors["phone-input"] && <p className="error-message">Invalid Phone</p>}
    </div>
  );
};

export default MyForm;
