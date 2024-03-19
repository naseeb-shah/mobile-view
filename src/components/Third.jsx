import { Img, Box, Text, Input,Button } from "@chakra-ui/react";
import { Progress } from '@chakra-ui/react'
export const Third = () => {
    let objectArray = [
        { id: 1, role: 'Manager', dob: '1990-05-15', name: 'John Doe' },
        { id: 2, role: 'Developer', dob: '1988-12-20', name: 'Jane Smith' },
        { id: 3, role: 'Designer', dob: '1995-08-10', name: 'Alex Johnson' }
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

<Text bg={"rgb(23,34,34)"} fontSize={'16px'} paddingEnd={5} paddingStart={5} paddingTop={2} paddingBottom={2} borderRadius={16}  color={'white'} w={"80%"}
mb={5}
>
    Search with Name
</Text>
{
    objectArray.map((e)=><Box key={e+'sai'} ml={e.id%2==0?'55px':'0px'} pl={5} bg={"rgb(18,25,22)"} w={"80%"} borderRadius={10} pb={2} fontSize={'12px'}mb={5}>
    <Box display={"flex"} m={2} >
        <Text color={'white'} opacity={.7}>{"EMP ID :"}</Text>
        <Text   ml={5} color={"white"}>1</Text>
    
    </Box>
    <Box display={"flex"} m={2}>
        <Text color={'white'} opacity={.7}>{"NAME   :"}</Text>
        <Text ml={5} color={'white'}>{e.name}</Text>
    
    </Box><Box
    display={"flex"} m={2}>
        <Text color={'white'} opacity={.7}>DOB  :</Text>
        <Text  ml={5} color={"rgb(118,81,29)"}>{e.dob}</Text>
    
    </Box><Box
    display={"flex"} m={2}>
        <Text color={'white'} opacity={.7}>Role  :</Text>
        <Text  ml={5} color={"rgb(45,124,57)"}>{e.role}</Text>
    
    </Box>
            
    
    </Box>)
}

       
       
    </Box>
    </Box>
  );
};
