import React, { useState, useEffect } from "react";
import { Card, CardGroup, Col, Row } from "react-bootstrap";

const NewCountdownTimer = ({
  targetDate,
  someDate,
  handleSetElapsed,
  isElapsed,
}) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = new Date(targetDate) - now;

    if (difference > 0) {
      return {
        obj: {
          Day: Math.floor(difference / (1000 * 60 * 60 * 24)),
          Hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
          Min: Math.floor((difference / (1000 * 60)) % 60),
          Sec: Math.floor((difference / 1000) % 60),
        },
        isElapsed: false,
      };
    } else {
      if (!isElapsed) handleSetElapsed(true);
      return {
        obj: {
          Day: "00",
          Hrs: "00",
          Min: "00",
          Sec: "00",
        },
        isElapsed: true,
      };
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [targetDate]);

  if (!timeLeft) {
    return <div>Event has started or time has elapsed!</div>;
  }

  const RenderTimer = (customDate) => {
    let customDate1 = new Date(customDate);
    const date = new Date();

    // Extracting parts of the date
    const year = date.getFullYear(); // Full year (e.g., 2025)
    const month = date.getMonth() + 1; // Month (0-11, so add 1 for 1-12)
    const day = date.getDate(); // Day of the month (1-31)
    const hours = date.getHours(); // Hours (0-23)
    const minutes = date.getMinutes(); // Minutes (0-59)
    const seconds = date.getSeconds(); // Seconds (0-59)
    const milliseconds = date.getMilliseconds(); // Milliseconds (0-999)
    const timerData = {
      year,
      month,
      day,
      hours,
      minutes,
      seconds,
      milliseconds,
    };

    return (
      <Container>
        <Row lg="7">
          {Object.entries(timerData).map(([key, val]) => (
            <Col key={key}>
              <Card>{val}</Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };

  return (
    <Row className="d-flex ">
      <Col className="w-100">
        <CardGroup>
          {Object.entries(timeLeft.obj).map(([key, val]) => (
            <>
              <Card
                key={key}
                className="w-100 fs-2 text-center text-info 
          shadow-lg p-3 mb-5 bg-white rounded-0
          gap-0 
          "
              >
                <Card.Header
                  className="text-secondary w-100"
                  style={{ fontSize: "small" }}
                >
                  {/* {timeLeft.isElapsed && <p>Time Elapsed!</p>} */}
                  {key}
                </Card.Header>
                {val}
              </Card>
            </>
          ))}
        </CardGroup>
      </Col>
    </Row>
  );
};

export default NewCountdownTimer;
