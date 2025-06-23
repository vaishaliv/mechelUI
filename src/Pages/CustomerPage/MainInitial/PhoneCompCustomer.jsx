import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneCompCustomer = ({
  phoneNumber,
  setPhoneNumber,
  setPhoneError,
  defaultPhoneVal,
}) => {
  const [phone, setPhone] = useState(defaultPhoneVal);
  const [isValid, setValid] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState("India");

  const handlePhoneChange = (value) => {
    setPhone(value);
    const slicedNumber = value.slice(2);
    console.log("handel phone change....", value, slicedNumber);
    const obj1 = { ...phoneNumber, number: slicedNumber };
    if (JSON.stringify(obj1) !== JSON.stringify(phoneNumber)) {
      console.log("setting state...", obj1);

      setPhoneNumber(obj1);
    }

    const validFlag = ValidatePhoneNumber(value);
    const countrySelectedFlag = selectedCountry == "India";
    const showError = !validFlag && countrySelectedFlag;

    setPhoneError(showError);

    setValid(ValidatePhoneNumber(value));
  };

  const ValidatePhoneNumber = (phone, country) => {
    if (selectedCountry !== country?.name) setSelectedCountry(country?.name);

    // const phonePattern = /^\d[10]$/;//check for 10 digits
    // if (country?.name === "India")
    const slicedNumber = phone.slice(2);
    const obj1 = {
      number: slicedNumber,
      country: country?.name,
      code: country?.dialCode,
    };

    if (JSON.stringify(obj1) !== JSON.stringify(phoneNumber)) {
      setPhoneNumber(obj1);
    }

    const phonePattern = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/; //check for 10 digits plus +91
    return phonePattern.test(phone);
  };

  return (
    <div>
      <PhoneInput
        country={"in"}
        onlyCountries={["in"]}
        value={phone}
        placeholder="917738180202"
        isValid={ValidatePhoneNumber}
        onChange={handlePhoneChange}
        inputProps={{
          required: true,
        }}
      />

      {/* {!isValid && selectedCountry == "India" && (
        <p className="text-danger">Please enter a valid phone number</p>
      )} */}
    </div>
  );
};

export default PhoneCompCustomer;
