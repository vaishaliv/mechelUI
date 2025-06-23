import React, { useState, useRef, useEffect } from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import CommonHeader from "../../components/common/CommonHeader";
import Map from "./Map";
// import UserData from "./UserData";
import Contacts from "./Contacts";
import CustomEmail from "../../components/common/CustomEmail";
import CountdownTimer from "./CountdownTimer";
import DatePickerComp from "../../components/common/DatePickerComp";

const PageData = [
  {
    id: 1,
    title: "Questions or Comments?",
    body: "We know that our clients have unique needs and circumstances. Tell us more about your requirement and we will get back to you soon with some ideas of how we can address those circumstances while creating the most stable solution for any application.",
  },
  {
    id: 2,
    title: "Mechel Systems and Services",
    body: "105, NIRMAN INDUSTRIAL ESTATE, LINK ROAD, MALAD WEST, MUMBAI 400064",
  },
];
const Contact = () => {
  const [formData, setFormData] = useState([
    {
      id: 0,
      name: "",
      email: "",
      msg: "",
      createdDate: "",
    },
  ]);

  const [showReminder, setShowReminder] = useState(false);
  const [reminderCount, setReminderCount] = useState(null);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const msgRef = useRef(null);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  useEffect(() => {}, []);

  const handleReminderClose = () => setShowReminder(false);
  const handleReminderOpen = () => setShowReminder(true);
  const BottomCardInfo = () => {
    return (
      <Card
        style={{
          backgroundColor: "black",
          color: "aliceblue",
          padding: "1rem",
        }}
      >
        <Card.Body>
          <span
            style={{
              color: "rgb(38, 152, 156)",
            }}
          >
            +91 9769909978
          </span>
          <span>{"  Vijay "}</span>
        </Card.Body>
        <Card.Body>
          <span
            style={{
              color: "rgb(38, 152, 156)",
            }}
          >
            +91 9769909978
          </span>
          <span>{"  Vishal"}</span>
        </Card.Body>
        <Card.Body>
          Email :
          <span
            style={{
              color: "rgb(38, 152, 156)",
            }}
          >
            mechel.mumbai@gmail.com
          </span>
        </Card.Body>
      </Card>
    );
  };
  const CardInfo = () => {
    return PageData.map((data) => (
      <Card
        key={data.id}
        style={{
          border: "0.1px solid #191414",
          backgroundColor: "black",
          color: "aliceblue",
          padding: "1rem",
        }}
      >
        <Card.Body>
          <h3>{data.title}</h3>
        </Card.Body>
        <Card.Body>{data.body}</Card.Body>
      </Card>
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();

    // Accessing the values of the input fields using useRef
    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    const email = emailRef.current.value;
    const msg = msgRef.current.value;
    const createdDate = date.toLocaleString();

    CustomEmail({ name, phone, email, msg, createdDate });
    // localStorage.setItem("Users",[{id:1,name,email,msg}])














    // llllllllllllllllllllllllllllllll1
    const data = localStorage.getItem("Users");
    const loginUser = JSON.parse(data);
    // lllllllllllllllllllllllllllllllll























    const newItem = {
      // id: display1 && display1.length,
      name,
      email,
      msg,
      createdDate: date.toLocaleString(),
    };
    let sampleData = [];
    // const sampleData = [...display1, newItem];
    setFormData([...formData, newItem]);
    // setItems([...items, newItem]);
    localStorage.setItem("Users", JSON.stringify(sampleData)); // Save data

    const data2 = localStorage.getItem("Users");
    const display2 = JSON.parse(data2);
    const variant = "primary";
    <Alert key={variant} variant={variant}>
      This is a {variant} alert—check it out!
    </Alert>;

    // Optionally, clear the input fields
    // nameRef.current.value = "";
    // emailRef.current.value = "";
    // msgRef.current.value = "";
    nameRef.current.focus();
  };
  const today = new Date();

  const FormComp = () => {
    return (
      <Card
        style={{
          border: "0.1px solid #191414",
          backgroundColor: "black",
          color: "aliceblue",
        }}
      >
        <Card.Body>
          <h3 className="p-5">{"We're Here to Help!"}</h3>
          <Form onSubmit={handleSubmit} className="p-5">
            <Row className="mb-3">
              <Form.Control
                required
                ref={nameRef}
                name="name"
                className="mb-2"
                style={{
                  border: "0.1px solid #191414",
                }}
                placeholder="Name *"
                type="text"
              />
            </Row>
            <Row className="mb-3">
              <Form.Control
                required
                ref={phoneRef}
                name="phone"
                className="mb-2"
                style={{
                  border: "0.1px solid #191414",
                }}
                placeholder="Phone *"
                type="text"
              />
            </Row>
            <Row className="mb-3">
              <Form.Control
                required
                ref={emailRef}
                name="email"
                className="mb-2"
                style={{
                  border: "0.1px solid #191414",
                }}
                placeholder="Email *"
                type="email"
              />
            </Row>
            <Row className="mb-3">
              <Form.Control
                required
                ref={msgRef}
                name="msg"
                as="textarea"
                placeholder="Leave a comment here *"
                style={{
                  height: "120px",
                  border: "0.1px solid #191414",
                }}
                className="mb-2"
                type="textarea"
              />
            </Row>
            <Row>
              <Button
                type="submit"
                style={{
                  backgroundColor: "rgb(38, 152, 156)",
                  width: "100%",
                }}
                variant="warning"
              >
                Send
              </Button>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div
      style={{
        marginTop: "2rem",
        backgroundColor: "black",
        height: "auto",
        width: "auto",
      }}
    >
      <CommonHeader title="contact us" topMargin="1rem" innerMargin="2rem" />
      <Container className=" w-100">
        <Row>
          <Col>
            <FormComp />
          </Col>
          <Col>
            <CardInfo />
            <BottomCardInfo />
          </Col>
        </Row>
        <hr/>
        <Row>
          <Contacts />
        </Row>
      </Container>

      <Map />
    </div>
  );
};

export default Contact;
