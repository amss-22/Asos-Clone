
import React from "react";


import {
  Box,
  Text,
  Center,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Button,
  IconButton,
} from "@chakra-ui/react";

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../authcontext/AuthContextProvider";
import {
  ProductSuccess,
  ProductRequest,
  ProductFailure,
} from "../authcontext/action";
import { useSearchParams ,useNavigate} from "react-router-dom";
import Navdown from "../navbar2/navdown";


function Product() {
  let { state, dispatch } = useContext(AppContext);
  const navigate=useNavigate()

  let [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams)
  let initialPage = searchParams.get("page");
  if (initialPage == null) {
    initialPage = 2;
  }

  let [page, setPage] = useState(initialPage);
  let [totalPages, setTotalPages] = useState();
  // let [data,setData]=useState([])

  function getData(params = {}) {
    dispatch(ProductRequest());

    axios
      .get(
        `  http://localhost:8080/posts`,
        {
          params: {
            _page: 2,
            _limit: 10,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        dispatch(ProductSuccess(res.data));
        setTotalPages(res.data.totalPages);
      })

      .catch((err) => {
        dispatch(ProductFailure());
        console.log(err);
      });
  }

  function handlepage(data) {
    setPage(data);
  }

  useEffect(() => {
    let params = {
      page: page,
      
    };

    getData(params);
  }, [page]);

  useEffect(() => {
    setSearchParams({ page });
  }, [page]);

  // console.log(state.data)

  if (state.isLoading) {
    return <h1>....Loading</h1>;
  }

  if (state.isError) {
    return <h1>....Something went Wrong</h1>;
  }

  const checkHandle=()=>{
    if(state.isAuth=== false){
navigate("/cart")
    }
  }

  return (
    <Box
      // bgGradient={[
      //   "linear(to-tr, teal.300, yellow.400)",
      //   "linear(to-t, blue.200, teal.500)",
      //   "linear(to-b, orange.100, purple.300)",
      // ]}
    >
      <Navdown/>

      <SimpleGrid
        textAlign="center"
        justifyItems="center"
        columns={4}
        // spacing={2}
        // gap={70}
      >
        {state.data.map((item) => {
          return (
            
            <Box
            textAlign="center"
            height="auto"
            width="300px"
              boxShadow="base"
              p="1"
              rounded="md"
              bg="white"
              key={item.id}
              style={{ textAlign: "start", margin: "auto",display:"flex",flexDirection:"column",gap:"3px" }}
            >
              <img height="100px" src={item.image} alt="" />
              <Text size="sm" textAlign="center">{item.title}</Text>
              <Heading textAlign="center" size="sm">
                {item.price}
              </Heading>
              <Button textAlign="center" size="md" style={{marginTop:"20px"}} onClick={checkHandle}>Add To Cart</Button>
            </Box>
          );
        })}
      </SimpleGrid>

    </Box>
  );
}

export default Product;