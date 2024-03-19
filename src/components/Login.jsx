import { Img, Box, Text, Input,Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const LogIn = () => {
  const navigate=useNavigate()
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      w={'350px'}
      
    >
      <Box
        alignItems={"center"}
        alignContent={"center"}
        justifyContent={"center"}
        textAlign={"center"}
        display="flex"
        flexDirection="column"
      
      >
        <Img alignSelf={"center"} src="/a.png"></Img>
        <Text
          fontSize="20px"
          mb={5}
          mt={5}
          color="#36A546"
          fontWeight="normal"
          lineHeight="21px"
          letterSpacing="0.02px"
        >
          We are Electric
        </Text>
        <Box mb={30}>
          <Input
            borderRadius={25}
            w={'300px'}
            placeholder="Email"
            bg="#1F191966"
            boxShadow="inset 0px 3px 3px #FFFDFD40, 3px 3px 3px #4A494947"
            color="white"
            _placeholder={{ color: "grey" }}
          />
        </Box>
        <Box>
          <Input placeholder="Password" borderRadius={30} w={300} 
          
          bg="#1F191966"
          boxShadow="inset 0px 3px 3px #FFFDFD40, 3px 3px 3px #4A494947"
          color="white"
          _placeholder={{ color: "grey" }}
          
          />
        </Box>
     
        <Button
          mt={6} // Add margin top to create space between the input and the button
          variant="solid"
          color={"white"}
          bg="transparent linear-gradient(180deg, #00FF2580 0%, #000001 100%, #36A54680 100%) 0% 0% no-repeat padding-box"
          fontWeight="bold"
          fontSize="16px"
          lineHeight="21px"
          w={300}
        borderRadius={25}
          letterSpacing="0.02px"
          onClick={()=>navigate('/sec')}
        >Login
            </Button>

        <Text color={"#36A546"} mt={5} >
            Forgot Password
        </Text>

      </Box>
    </Box>
  );
};
