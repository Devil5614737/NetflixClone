import React, { useState } from "react";
import styled from "styled-components";
import NetflixLogo from "../assets/logo3.png";
import Input from "../components/Input/Input";
import { useHistory } from "react-router";

import PulseLoader from "react-spinners/PulseLoader";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

const Container = styled.div`
  background-image: url("https://assets.nflxext.com/ffe/siteui/vlv3/5dd45df7-33f1-4274-97ea-e9c6aca69dad/ed1cb962-411d-4e43-bad2-33f07ae8e341/IN-en-20211108-popsignuptwoweeks-perspective_alpha_website_medium.jpg");
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
  padding: 2em 3em;
  position: relative;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0.9) 100%
    );
    z-index: -1;
  }
  @media (max-width: 739px) {
    background-image: unset;
  }
`;

const Logo = styled.img`
  width: 166px;
  height: 45px;
  cursor: pointer;
  object-fit: contain;
  @media (max-width: 739px) {
    width: 75px;
    height: 32px;
  }
`;
const LoginContainer = styled.div`
  color: white;
  width: 450px;
  height: 500px;
  margin: 0 auto;
  padding: 4rem 6.8rem;
  background-color: rgba(0, 0, 0, 0.75);
  @media (max-width: 739px) {
    background-color: unset;
    margin: unset;
    width: unset;
    height: unset;
    padding: unset;
    padding-top: 2rem;
  }
`;
const Title = styled.h4`
  font-size: 3.2rem;
  text-transform: capitalize;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;
const Button = styled.div`
  width: 31.4rem;
  height: 5rem;
  background-color: #e50914;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  @media (max-width: 739px) {
    width: 100%;
  }
`;
const BtnText = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
`;

const SignupText = styled.p`
  color: #737373;
  font-size: 1.6rem;
  margin-top: 12px;
`;
const Span = styled.span`
  color: white;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

function Login() {
  const history = useHistory();
  const [signup, setSignup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const register = async () => {
    const { email, password } = values;
    try {
      const user = await createUserWithEmailAndPassword(
        auth,

        email,
        password
      );
      if (user) {
        window.alert("user created");
      }

      setSignup(false);
      setIsLoading(false);
      return;
    } catch (error) {
      if (error) {
        window.alert(error);

        setIsLoading(false);
        console.log(error);
      }
    }
  };

  const login = async () => {
    const { email, password } = values;
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        localStorage.setItem("token", user.user.accessToken);
        setIsLoading(false);
        window.location = "/profile";
        return;
      }
    } catch (error) {
      if (error) window.alert("Invalid credentials");

      console.log(error.message);
      setIsLoading(false);
    }
  };

  const handleSignup = () => {
    setIsLoading(true);
    register();
  };
  const handleLogin = () => {
    setIsLoading(true);
    login();
  };
  return (
    <>
      <Container>
        <Logo
          onClick={() => history.push("/")}
          src={NetflixLogo}
          alt="netflix logo"
        />
        {!signup ? (
          <LoginContainer>
            <Title>sign in</Title>
            <InputContainer>
              <Input
                placeholder="Email or phone number"
                type="email"
                onChange={handleChange}
                value={values.email}
                name="email"
              />
              <Input
                placeholder="Password"
                type="password"
                onChange={handleChange}
                value={values.password}
                name="password"
             
            
              />
              <Button onClick={handleLogin}>
                <BtnText>
                  {isLoading ? (
                    <PulseLoader color="white" loading={isLoading} size={13} />
                  ) : (
                    "Login"
                  )}
                </BtnText>
              </Button>
            </InputContainer>
            <SignupText>
              New to Netflix?
              <Span onClick={() => setSignup(true)}>Sign up now.</Span>
            </SignupText>
          </LoginContainer>
        ) : (
          <LoginContainer>
            <Title>sign up</Title>
            <InputContainer>
              <Input
                placeholder="Email or phone number"
                type="email"
                onChange={handleChange}
                value={values.email}
                name="email"
              />
              <Input
                placeholder="Password"
                type="password"
                onChange={handleChange}
                value={values.password}
                name="password"
              />
              <Button onClick={handleSignup}>
                <BtnText>
                  {isLoading ? (
                    <PulseLoader color="white" loading={isLoading} size={13} />
                  ) : (
                    "Signup"
                  )}
                </BtnText>
              </Button>
            </InputContainer>
          </LoginContainer>
        )}
      </Container>
    </>
  );
}

export default Login;
