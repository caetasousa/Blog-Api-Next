import { Flex, Text, Button, Spacer, Box } from "@chakra-ui/react";

export function Header() {
    return (
        <Flex as="header" 
            width="100%" 
            maxWidth={1480} 
            backgroundColor="gray.800" 
            minHeight="60px"
            mx="auto"
            px="10" 
            align="center"
        >
            <Text 
                as="a" 
                href="#" 
                fontSize="2xl" 
                fontWeight="bold" 
                w="64"
            >
                Blog.Edd
            </Text>

            <Spacer/>

            <Box>
                <Button 
                    as="a"
                    variant="link"
                    fontSize="medium"
                    colorScheme="yellow"
                    mr="5"
                    href="#" 
                >
                    Sign Up
                </Button>
                
                <Button 
                    colorScheme="yellow"
                    fontSize="medium"
                    href="#"
                >
                    Log in
                </Button>
            </Box>
        </Flex>
    );

}