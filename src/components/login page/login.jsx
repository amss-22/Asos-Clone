import React from "react";

import {
  Container,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Box,
  background,
} from "@chakra-ui/react";

import axios from "axios";

import { useContext, useState } from "react";

import {
  LoginRequest,
  LoginSucess,
  LoginFailure,
} from "../authcontext/action";

import { AppContext } from "../authcontext/AuthContextProvider";
import { useNavigate, Link } from "react-router-dom";
import { Logo } from "../navbar/navbar.images/images";



const BorderStyle={
    border: "1px solid #eee",
    backgroundColor :"#eee",
    height:"120vh"
}
let user = {
  email: "",
  password: "",
  token:"",
};
function Login() {
  let { state, dispatch } = useContext(AppContext);
  let navigate = useNavigate();
  // console.log(dispatch,state)
  let [userData, setUserData] = useState(user);

  async function getData(userData) {
    dispatch(LoginRequest());

    let res = await axios.post(`https://reqres.in/api/login`, {
      email: userData.email,
      password: userData.password,

      token:userData.token
    });
    try {
      let data = res.data.token;
      if (data) {
        dispatch(LoginSucess(data));
      }
    } catch (err) {
      dispatch(LoginFailure());
      console.log(err);
    }
  }

  function handleChange(e) {
    console.log(e.target.value);
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  function handleSeacrh(e) {
    e.preventDefault();
    getData(userData);
  }

  if (state.isAuth) {
    navigate("/");
  }





  return (
    <Box style={BorderStyle}>
       

    <Container style={{height: "80vh",marginTop: "5rem",marginBottom:"5rem"
   , padding:"2rem",border: "px solid red",boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px", backgroundColor:"white" }}>
     <Container style={{border: "px solid red",display:"flex", justifyContent: "center",height:"3em"}}><img src={Logo }alt="logo image"  /></Container>
    
      <Stack style={{marginTop: " 5em",paddingLeft:"2.5em",paddingRight:"2.5em"}} >
        <FormControl lineHeight="3rem">
          <FormLabel color="#666" fontWeight="700" letterSpacing="0.25em" >EMAIL ADDRESS :</FormLabel>

          <Input
            placeholder="Email Address"
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            borderRadius="none"
            borderColor="#999"
          />

          <FormLabel color="#666" fontWeight="700" letterSpacing="0.25em" >PASSWORD</FormLabel>
          <Input
            placeholder="Enter Password"
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            borderRadius="none"
            borderColor="#999"

          />
          <Button
            marginTop="20px"
            fontSize="25px"
            height="48px"
            width="200px"
            border="1px"
            borderRadius="20px"
            borderColor="teal"
            onClick={handleSeacrh}
            marginLeft="3.85em"
          >
            Login
          </Button>
          <FormLabel marginLeft="8.5rem" marginTop="2rem"><Link>Forget Password ?</Link></FormLabel>
        </FormControl>

      </Stack>
    </Container>
    </Box>
  );
}

export default Login;
