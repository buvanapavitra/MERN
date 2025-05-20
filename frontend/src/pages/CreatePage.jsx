import { Heading, useColorModeValue, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { Box, VStack } from '@chakra-ui/react';
import { Input, Button } from '@chakra-ui/react';
import { useProductStore } from '../store/product';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Container } from '@chakra-ui/react';

const CreatePage = () => {

    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
    });

    const toast = useToast();
    const {createProduct} = useProductStore();

    const handleAddProduct = async () => {
        const {success, message} = await createProduct(newProduct);
         if(!success){
            toast({
                title: "Error",
                description: message,
                status: "error",
                isClosable: true,
                position: "top",
            });
         } else {
            toast({
                title: "Success",
                description: message,
                status: "success",
                isClosable: true,
                position: "top",
            });
         }
         setNewProduct({name: "", price: "", image: ""});
       
    };
    return <Container maxW={"container.sm"}>
        <VStack spacing={8}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>
                Create a new product
            </Heading> 
            <Box
                w={"full"} bg={useColorModeValue("white","gray.800")}
                p={6} rounded={"lg"} shadow={"md"}
                
            >
                <VStack spacing={4}>
                    <Input 
                        placeholder= 'Product Name'
                        name = "name" 
                        value = {newProduct.name}
                        onChange = {(e) => setNewProduct({...newProduct,name: e.target.value})}
                    />
                    <Input 
                        placeholder = 'price'
                        name = 'price'
                        value = {newProduct.price}
                        onChange = {(e) => setNewProduct({...newProduct, price: e.target.value})}
                    />
                    <Input 
                        placeholder = 'image'
                        name = 'image'
                        value = {newProduct.image}
                        onChange = {(e) => setNewProduct({...newProduct, image: e.target.value})}
                    />
                    <Button colorScheme = 'blue' onClick= {handleAddProduct} w='full'>
                        Add Product
                    </Button>
                </VStack>
            </Box>
        </VStack>
    </Container>
}

export default CreatePage;