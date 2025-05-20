import { Container, Flex, HStack, Button, Text, useColorMode } from "@chakra-ui/react"
import { PlusSquareIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { FaSun } from "react-icons/fa";



const NavBar = () => {

    const {colorMode, toggleColorMode} = useColorMode();
   

    return <Container maxW={"1140px"} px={4} >
        <Flex h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base: "column",
                md: "row"
            }}>
        <Text fontSize={{base: "22", sm: "28"}}
             fontWeight={"bold"}
             textTransform={"uppercase"}
             textAlign={"center"}
             bgGradient={"linear(to-r, cyan.400, blue.500)"}
             bgClip= {"text"}
             >
            <Link to={"/"}>Product Store🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
            <Link to={"/create"}>
                <Button>
                    <PlusSquareIcon fontSize={20} />
                </Button>
            </Link> 
            <button onClick={toggleColorMode}>
                {colorMode === "light" ? <IoMoon size="20" />:<FaSun size="20"/>} 
            </button>
        </HStack>
        </Flex>
    </Container>
}

export default NavBar;