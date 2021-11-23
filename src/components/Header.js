import { Box, Heading } from "@chakra-ui/layout";

function Header({title}) {
    
    return(
    <Box backgroundColor="#4a86e8" p={4} shadow="md">
        <Heading >{title}</Heading>
        <h1 p={4}>Please select a category or search for a product</h1>
    </Box>
)}

export default Header