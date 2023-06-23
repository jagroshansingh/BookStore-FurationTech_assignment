import { Box, Button, Icon, Image, Input, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { BsCart3 } from "react-icons/bs";
import styles from "./CSS/Navbar.module.css";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const toast=useToast()
  const navigate = useNavigate();
  let ss=JSON.parse(sessionStorage.getItem('Auth'))

  const handleAuth=()=>{
    if(!ss?.token) navigate("/auth")
    else 
    {
      sessionStorage.removeItem('Auth')
      navigate('/')
      toast({
        position:'top',
        title:'Logout success',
        status:'success',
        duration:2000,
      })
    }
  }

  return (
    <div className={styles.navbarContainer}>
      <Box boxShadow={"lg"}>
        <Image
          onClick={() => navigate("/")}
          src="https://furation.tech/ftlogo2.svg"
        />
        <Input placeholder="SearchBar" />
        <div>
          <Icon as={BsCart3} onClick={() => navigate("/shoppingcart")} />
          <Button onClick={handleAuth}>{!ss?.token?'SignUp/Login':'Logout'}</Button>
        </div>
      </Box>
    </div>
  );
};
