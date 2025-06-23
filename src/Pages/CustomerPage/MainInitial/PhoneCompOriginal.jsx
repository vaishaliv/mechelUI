import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneNumberInput = () => {
  const [phone, setPhone] = useState("");
  const [isValid, setValid] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState("India");

  const handlePhoneChange = (value) => {
    setPhone(value);
    setValid(ValidatePhoneNumber(value));
  };

  const ValidatePhoneNumber = (phone, country) => {
    setSelectedCountry(country?.name);
    // const phonePattern = /^\d[10]$/;//check for 10 digits
    // if (country?.name === "India") {
    const phonePattern = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/; //check for 10 digits plus +91
    return phonePattern.test(phone);
    // }
  };

  return (
    <div>
      <PhoneInput
        country={"in"}
        onlyCountries={["in"]}
        value={phone}
        isValid={ValidatePhoneNumber}
        onChange={handlePhoneChange}
        inputProps={{
          required: true,
        }}
      />

      {!isValid && selectedCountry == "India" && (
        <p className="text-danger">Please enter a valid phone number</p>
      )}
    </div>
  );
};

export default PhoneNumberInput;
