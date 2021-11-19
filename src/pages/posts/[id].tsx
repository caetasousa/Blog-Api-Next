import { Header } from "../../components/Header";
import { Flex, Box, Container, Heading, Text } from "@chakra-ui/react"
import { api } from "../../services/api";
import { GetStaticProps, GetStaticPaths } from 'next';


interface PostPreviewProps {
    post: {
        title: string;
        content: string;
    }
}


export default function Home({ post }: PostPreviewProps) {
  return (
    <>
    
      <Flex as="div">
        <Header/>
      </Flex>
      <Container maxW='container.md' p="12">
        
            <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop="6"
            >
                <Heading marginTop="1">
                    {post.title}
                </Heading>
                <Text
                as="p"
                marginTop="2"
                color="gray.600"
                fontSize="lg">
                    {post.content}
                </Text>
            </Box>               
      </Container>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params
    const res = await api.get(`api/${id}`)
    const post = res.data
    console.log(post)
    return {
        props: {
            post
        }        
    }
}