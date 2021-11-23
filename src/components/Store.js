import { Box, Center, GridItem, Heading, SimpleGrid, Text, } from "@chakra-ui/layout";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import Header from "./Header";
import { Input, Menu, MenuButton, MenuList, MenuItem,Button } from "@chakra-ui/react";
import { useState, } from "react";
import axios from "axios";
import  pChart  from "./Chart";

const StoreItem=({title, description, image, category})=>{
    return (<Box p={4} borderRadius="lg" borderWidth="1px">
        <Center>
        <Image w="24" src={image}/>
        </Center>
        <br/>
        <Button marginLeft={100} position="absolute" colorScheme="blue" textAlign="center">{category.toUpperCase()}</Button>
        <br/><br/>
        <hr height="2px" backgroundColor="#000000"/>
        <Heading mt={4} noOfLines={2} size="sm" fontWeight="normal">Name: {title}</Heading>
        <br/>
        <Text noOfLines={2}>Product Description: {description}</Text>
    </Box>)
}



function Store({items, onItemAdd}) {
    const [filteredItems, setFilteredItems]=useState(items)

    return (
    <Box>
        <Header title="Fake Store"/>
         <Box as={Button} top={10} position="absolute" right={50}>
            <Input onChange={e=>{
                let f=items.filter(item=>item.title.toLowerCase().includes(e.target.value.toLowerCase()))
                setFilteredItems(f)
            }} size="sm" placeholder="Search"/>
        </Box>
        <Menu >
            <MenuButton top={10} position="absolute" right={300} as={Button} rightIcon={<ChevronDownIcon />}>
                Select Category
            </MenuButton>
            <MenuList>
            <MenuItem onClick={()=>{
                axios.get("https://fakestoreapi.com/products").then(({data})=>{
                    setFilteredItems(data)
                  })}}>All Products
            </MenuItem>
            <MenuItem onClick={()=>{
                axios.get("https://fakestoreapi.com/products/category/men's%20clothing").then(({data})=>{
                    setFilteredItems(data)
                  })}}>Men's Clothing
            </MenuItem>
            <MenuItem  onClick={()=>{
                axios.get("https://fakestoreapi.com/products/category/women's%20clothing").then(({data})=>{
                        setFilteredItems(data)
                      })}}>Women's Clothing
            </MenuItem>
            <MenuItem  onClick={()=>{
                    axios.get('https://fakestoreapi.com/products/category/jewelery').then(({data})=>{
                        setFilteredItems(data)
                  })}}>Jewelery
            </MenuItem>
            <MenuItem  onClick={()=>{
                    axios.get('https://fakestoreapi.com/products/category/electronics').then(({data})=>{
                        setFilteredItems(data)
                      })}}>Electronics
            </MenuItem>
            </MenuList>
        </Menu>
        <Button marginLeft={4} bottom={4} position="fixed" right={4} colorScheme="blue" onClick={()=>{
            <pChart/>
        }}>Analyze</Button>
        <SimpleGrid paddingTop={4} columns={4} spacing={4}>
        {filteredItems.map((item)=>{
            return( <GridItem>
                <StoreItem {...item}/>
            </GridItem>
            
            )})}
        </SimpleGrid>
    </Box>
    )
}

export default Store;