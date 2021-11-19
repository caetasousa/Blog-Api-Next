import { Flex, Box, FormLabel, Input, Stack, Button, Heading, FormControl } from '@chakra-ui/react';
import { useState, useContext } from 'react';
import { FormEvent } from 'react';
import { Header } from '../../components/Header';
import { useRouter } from 'next/router';
import { AuthContext } from '../../contexts/AuthContext';


export default function Register() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signIn } = useContext(AuthContext)

    async function handleLogin(event: FormEvent) {
        event.preventDefault()
        const data = {
            email: email,
            password: password 
        }

        await signIn(data)
        router.push('/dashboard')
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
                            onClick={handleLogin}
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