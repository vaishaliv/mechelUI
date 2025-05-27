import React from "react";
import emailjs from "@emailjs/browser";

const service_id = "service_r39gzb9";
const template_id = "template_y4rgr7c";
const user_id = "gbT_QRIwzpuUehttQ";

const CustomEmail = (details) => {
  console.log("Custom email called....", details);

  const toSend = {
    name: details.name,
    email: details.email,
    message: details.msg,
    phone: details.phone,
  };
  emailjs
    .send(
      "service_r39gzb9",
      "template_f1kia7f",
      {
        name: details.name,
        phone: details.phone,
        email: details.email,
        message: details.msg,
        time: details.createdDate,
        from_name: "Vijay",
        from_email:'vijay.girish.viragi@gmail.com',
        title: "New Customer Registered",
      },
      "tjehOi2vZ5_rzFRj8"
    )
    .then((resp) => {
      console.log("Response............", resp);
    })
    .catch((err) => {
      console.log("Email ERROR.............", err);
    });
};

export default CustomEmail;
