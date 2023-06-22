import React, { useState } from "react";
import axios from "axios";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Box,
  Input,
  Heading,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import styles from "./CSS/LoginSignup.module.css";

export const LoginSignup = () => {
  const toast = useToast();
  const navigate = useNavigate();
  let initialLogin = {
    email: "",
    password: "",
  };
  let initialSignup = {
    email: "",
    password: "",
    cpassword: "",
  };
  const [login, setLogin] = useState(initialLogin);
  const [signup, setSignup] = useState(initialSignup);
  const handleLogin = (e) => {
    setLogin({ ...login, [e.target.type]: e.target.value });
  };

  const handleSignup = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const handleSignupClick = () => {
    if (signup.email && signup.password && signup.cpassword) {
      if (signup.password == signup.cpassword) {
        axios({
          method: "post",
          url: `${process.env.REACT_APP_URL}/signup`,
          data: signup,
        })
          .then((res) => toast({
            title: res.data,
            status: res.data=='Registration Success'?"success":"warning",
            duration: 2000,
            position: "top",
          }))
          .catch((err) => console.log(err));
      } else
        toast({
          title: "Password doesn't Match, Try Again!",
          status: "warning",
          duration: 2000,
          position: "top",
        });
    } else
      toast({
        title: "Fields can't be Empty",
        status: "warning",
        duration: 2000,
        position: "top",
      });
  };

  const handleLoginClick = () => {
    if (login.email && login.password) {
      axios({
        method: "post",
        url: `${process.env.REACT_APP_URL}/login`,
        data: login,
      })
        .then((res) => {
          if (res.data?.token) {
            sessionStorage.setItem("Auth", JSON.stringify(res.data));
            navigate("/booklisting");
          }
          toast({
            title: res.data.msg,
            status: res.data.msg=='Login Successful'?"success":"warning",
            duration: 2000,
            position: "top",
          });
        })
        .catch((err) => console.log(err));
    } else
      toast({
        title: "Fields can't be Empty",
        status: "warning",
        duration: 2000,
        position: "top",
      });
  };
  return (
    <div>
      <Box className={styles.authContainer}>
        <Tabs isFitted variant="solid-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Signup</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <VStack>
                <Heading>Login</Heading>
                <VStack className={styles.inputFields}>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    onChange={(e) => handleLogin(e)}
                  ></Input>
                  <Input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => handleLogin(e)}
                  ></Input>
                  <Input
                    type="submit"
                    placeholder="Login"
                    onClick={handleLoginClick}
                  ></Input>
                </VStack>
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack>
                <Heading>Signup</Heading>
                <VStack className={styles.inputFields}>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    onChange={(e) => handleSignup(e)}
                  ></Input>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => handleSignup(e)}
                  ></Input>
                  <Input
                    type="password"
                    name="cpassword"
                    placeholder="Confirm Password"
                    onChange={(e) => handleSignup(e)}
                  ></Input>
                  <Input
                    type="submit"
                    placeholder="Signup"
                    onClick={handleSignupClick}
                  ></Input>
                </VStack>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </div>
  );
};
