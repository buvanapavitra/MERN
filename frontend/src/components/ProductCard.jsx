import {Box, Heading, HStack, IconButton, Modal, VStack} from '@chakra-ui/react';
import { use } from 'react';
import { useColorModeValue } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { Image, Text } from '@chakra-ui/react';
import { useProductStore } from '../store/product';
import { useToast } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';	
import { ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Input } from '@chakra-ui/react';
import { useState } from 'react';

const ProductCard = ({ product }) => {
    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");
    const [updatedProduct, setUpdatedProduct] = useState(product);
   
     const { isOpen, onOpen, onClose } = useDisclosure();

    const {deleteProduct, updateProduct} = useProductStore();
    const toast = useToast();

   
    const handleUpdateProduct = async (pid, updatedProduct) => {
        const {success, message} = await updateProduct(pid, updatedProduct);
        onClose();
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
    }

    const handleDeleteProduct = async (pid) => {
        const {success,message} = await deleteProduct(pid);
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

    }

    return (
        <Box         
            rounded={"lg"}
            shadow={"lg"}
            _hover={{ shadow: "xl", transform: "translateY(-5px)" }}
            transition={"all 0.3s"}
            bg={bg}
        >
            <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover'/>
            <Box p={4}>
                <Heading as={"h3"} size={"md"} mb={2}>
                    {product.name}
                </Heading>
                <Text fontSize={"xl"} fontWeight={"bold"} color={textColor} mb={4}>
                    ${product.price}
                </Text>
                <HStack spacing={4} justifyContent={"space-between"}>
                    <IconButton icon={<EditIcon onClick={onOpen} />} colorScheme='blue'/>
                    <IconButton icon={<DeleteIcon onClick={() => handleDeleteProduct(product._id)}/>} colorScheme='red'/>
                </HStack>
            </Box>

        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />
                  <ModalBody>
        <VStack spacing={4}>
            <Input 
                placeholder= 'Product Name'
                name = "name" 
                value = {updatedProduct.name}
                onChange = {(e) => setUpdatedProduct({...updatedProduct,name: e.target.value})}
            />
            <Input 
                placeholder = 'price'
                name = 'price'
                value = {updatedProduct.price}
                onChange = {(e) => setUpdatedProduct({...updatedProduct, price: e.target.value})}
            />
            <Input 
                placeholder = 'image'
                name = 'image'
                value = {updatedProduct.image}
                onChange = {(e) => setUpdatedProduct({...updatedProduct, image: e.target.value})}
            />
            </VStack>
          </ModalBody>
           
       
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={() => handleUpdateProduct(product._id, updatedProduct)}>
              Update
            </Button>
            <Button variant='ghost' onClick={onClose}> Close</Button>
          </ModalFooter>

          </ModalContent>
         
          </Modal>
        </Box>
    )
};

export default ProductCard;