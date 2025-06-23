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
import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import pic from "../assets/logo.svg";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiLogOut } from "react-icons/bi";
const breakpoint = 700;

const NavBarComp = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [isSmallScreen, setScreenFlag] = useState({ width: "", breakpoint });
  const [userProfile, setProfile] = useState(null);

  const CLIENT_KEY = import.meta.env.VITE_CLIENT_ID;

  useEffect(() => {
    setLoading(true);
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          localStorage.setItem("USER-PROFILE", JSON.stringify(res.data)); // Save data
          setProfile(res.data);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false);
        });
    }
    return () => setLoading(false);
  }, [user]);

  // -----------------------------------------
  const useGoogleScript = (clientId, redirectUri, callback) => {
    useEffect(() => {
      const scriptId = "google-client-script";
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        script.defer = true;
        script.id = scriptId;

        script.onload = () => {
          window.google.accounts.id.initialize({
            client_id: clientId,
            callback: callback,
            redirect_uri: redirectUri,
          });
        };
        document.body.appendChild(script);
      }
    }, [clientId, redirectUri, callback]);
  };

  const handleCredentialResponse = (response) => {
    if (response?.credential) {
      console.log("response.credential", response.credential);
    } else {
      console.log("failed");
    }
  };

  const clientId = CLIENT_KEY;
  const redirectUri = "http://localhost:5173";

  useGoogleScript(clientId, redirectUri, handleCredentialResponse);

  const handleCustomSignIn = () => {
    window.google.accounts.id.prompt();
  };

  // const login = useGoogleLogin({
  //   onSuccess: (codeResponse) => console.log(codeResponse),
  //   onError: (codeResponse) => console.error(codeResponse),
  //   flow: "auth-code",
  // });
  // -----------------------------------------

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

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  const picture = userProfile?.picture;

  console.log(picture);

  return (
    <div>
      <Navbar
        expand="lg"
        className="bg-body-tertiary fluid
      //fixed-top"
      >
        <Container>
          <Navbar.Brand className="mx-3" href="/">
            <img
              src={logo}
              alt="logo"
              style={{
                height: "3.5rem",
              }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link " to="/home">
                HOME
              </Link>
              <Link className="nav-link" to="/about" href="/about">
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
              <Link className="nav-link" to="/reminders">
                REMINDERS
              </Link>
              <Link className="nav-link" to="/customers">
                CUSTOMERS
              </Link>
              {!userProfile && (
                <Link
                  className="nav-link"
                  to="/photos"
                  // onClick={handleCustomSignIn}
                  onClick={login}
                >
                  {isLoading ? <Spinner size={15} /> : "LOG IN"}
                </Link>
              )}
              {userProfile && (
                <Link className="nav-link" to="/photos" onClick={logOut}>
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
