import { Flex, Box, FormLabel, Input, Stack, Button, Heading, FormControl } from '@chakra-ui/react';
import { useState } from 'react';
import { FormEvent } from 'react';
import { Header } from '../../components/Header';
import { api } from '../../services/api';
  
interface CreateUser {
    user_name: string;
    email: string;
    password: string;
}

export default function Register() {
    const [email, setEmail] = useState('')
    const [user_name, setUser_Name] = useState('')
    const [password, setPassword] = useState('')

    function handleCreateUser(event: FormEvent) {
        event.preventDefault()
        const newUser: CreateUser = {
            email: email,
            user_name: user_name,
            password: password 
        }
        api.post('user/create/', {  email: newUser.email,
                                    user_name: newUser.user_name,
                                    password: newUser.password 
                                 }
                
        ).then((res) => {
            console.log(res.data)
        })
    }   
    
    return (
            <>
                <Header/>
                <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}>
                <Stack spacing={1} mx={'auto'} maxW={'lg'} py={1} px={6}>
                    <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Create your account</Heading>
                    </Stack>
                    <Box
                    rounded={'lg'}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack as="form" spacing={3} >
                        <FormControl id="email" >
                        <FormLabel>Email address</FormLabel>
                        <Input 
                            type="email" 
                            focusBorderColor="gray.500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        /> 
                        </FormControl>
                        <FormControl id="user_name">
                            <FormLabel>Username</FormLabel>
                            <Input 
                            type="user_name" 
                            focusBorderColor="gray.500"
                            value={user_name}
                            onChange={(e) => setUser_Name(e.target.value)}
                            /> 
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input 
                            type="password" 
                            focusBorderColor="gray.500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            /> 
                        </FormControl>
                        <Button
                            onClick={handleCreateUser}
                            type="submit"
                            bg={'yellow.400'}
                            color="gray.800"
                            _hover={{
                            bg: 'yellow.600',
                            }}>
                            Sign in
                        </Button>
                    </Stack>
                    </Box>
                </Stack>
                </Flex>
            </>
        );
    }