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
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import styles from './CSS/LoginSignup.module.css'


export const LoginSignup = () => {
  const navigate=useNavigate()
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
    if (signup.password == signup.cpassword) {
      axios({
        method: "post",
        url: `${process.env.REACT_APP_URL}/signup`,
        data: signup
      })
        .then((res) => alert(res.data))
        .catch((err) => console.log(err));
    }
    else alert("Recheck the password")
  };
  
  const handleLoginClick=()=>{
    axios({
      method:"post",
      url:`${process.env.REACT_APP_URL}/login`,
      data:login
    })
    .then((res)=>{
      if(res.data?.token)
      {
        sessionStorage.setItem('Token',res.data)
        navigate('/')
      } 
      alert(res.data.msg)
    })
    .catch((err)=>console.log(err))
  }
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
                <Heading>Login Form</Heading>
                <VStack>
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
                    backgroundColor="blue.600"
                    color={"white"}
                    onClick={handleLoginClick}
                  ></Input>
                </VStack>
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack>
                <Heading>Signup Form</Heading>
                <VStack>
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
                    backgroundColor="blue.600"
                    color={"white"}
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
