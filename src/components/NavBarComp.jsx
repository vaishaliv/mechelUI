import {
  Button,
  Col,
  Image,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavDropdown,
  Stack,
  Spinner,
} from "react-bootstrap";
// import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import pic from "../assets/logo.svg";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import UserContext from "../Contexts/UserContext";
const breakpoint = 700;

const NavBarComp = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isSmallScreen, setScreenFlag] = useState({ width: "", breakpoint });

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    const smallScreen = window.innerWidth < breakpoint;
    setScreenFlag({ width: window.innerWidth, breakpoint });
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const { isLoading, userProfile, login, logOut } = useContext(UserContext);

  const picture = userProfile?.picture;
  const userVerified = userProfile?.verified_email;

  // console.log(userProfile)

  console.log(userVerified, picture);

  return (
    <div>
      <Navbar
        expand="lg"
        className="bg-body-tertiary fluid
      //fixed-top"
      >
        <Container>
          <Link to="/">
            <Navbar.Brand className="mx-3">
              <img
                src={logo}
                alt="logo"
                style={{
                  height: "3.5rem",
                }}
              />
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link " to="/home">
                HOME
              </Link>
              <Link className="nav-link" to="/about">
                ABOUT US
              </Link>
              <Link className="nav-link" to="/contact">
                CONTACT US
              </Link>
              <Link className="nav-link" to="/products">
                PRODUCTS
              </Link>
              <Link className="nav-link" to="/photos">
                PHOTO GALLERY
              </Link>
              {userVerified && (
                <>
                  {/* <Link className="nav-link" to="/reminders">
                    REMINDERS
                  </Link> */}

                  <Link className="nav-link" to="/customers">
                    CUSTOMERS
                  </Link>
                </>
              )}

              {!userProfile && (
                <Link
                  className="nav-link"
                  // onClick={handleCustomSignIn}
                  onClick={login}
                >LOG IN
                
                  {/* {isLoading ? <Spinner size={15} /> : "LOG IN"} */}
                </Link>
              )}
              {userProfile && (
                <Link className="nav-link" onClick={logOut}>
                  LOG OUT
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Stack
          style={{
            padding: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {userProfile && userProfile.picture ? (
            <Image
              src={picture ? picture : logo}
              width="50px"
              height="50px"
              alt="user image"
              roundedCircle
            />
          ) : (
            <Image
              style={{ cursor: "pointer" }}
              onClick={login}
              src={pic}
              width="50px"
              height="50px"
              alt="user image"
              roundedCircle
            />
          )}
        </Stack>
      </Navbar>
      {userProfile ? (
        <Container>
          <p
            className="text-light"
            style={{
              justifySelf: "end",
              fontWeight: "lighter",
              fontSize: 12,
            }}
          >
            Hi {userProfile.name}!{/* <BiLogOut  className=""/> */}
          </p>
        </Container>
      ) : null}
    </div>
  );
};

export default NavBarComp;
