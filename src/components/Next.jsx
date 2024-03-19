import { Img, Box, Text, Input,Button } from "@chakra-ui/react";
import { Progress } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
export const SecondPage = () => {
  const navigate=useNavigate()
    const daysOfWeek = [
        { name: "Monday", number: 4 },
        { name: "Tuesday", number: 92 },
        { name: "Wednesday", number: 93 },
        { name: "Thursday", number: 122 },
        { name: "Friday", number: 89},
        { name: "Saturday", number: 98 }
      ];
      
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box
        alignItems={"center"}
        alignContent={"center"}
        justifyContent={"center"}
        textAlign={"center"}
        display="flex"
        flexDirection="column"
        w={'285px'}
      >
        <Img alignSelf={"center"} src="/moptro logo.png" mb={10}
        ></Img>

<Text bg={"rgb(23,34,34)"} paddingEnd={5} paddingStart={5} paddingTop={2} paddingBottom={2} borderRadius={16} opacity={.6} color={'white'} onClick={()=>navigate('/th')}>
    Employee Productivity Dashboard
</Text>
<Box bg={"rgb(18,25,22)"} w={"100%"} borderRadius={10} pb={16}>
   {
    daysOfWeek.map((e)=><><Box mb={3}mt={3} display={'flex'} flexDir={'row'} justifyContent={"space-around"}>
    <Text color={'white'}opacity={.7}>Productivity on {e.name}</Text>
    <Text color={"rgb(36,95,46)"}>{e.number}%</Text>

</Box>
<Progress ml={2} mr={2} borderRadius={10} colorScheme="whatsapp" size='sm' value={100} w={`${e.number>50?e.number-40:e.number}%`} />
</>) } 

        

</Box>
       
       
    </Box>
    </Box>
  );
};
