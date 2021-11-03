import { Header } from "../components/Header";
import { Flex, Box, Container, Heading, Text, Link } from "@chakra-ui/react"
import { api } from "../services/api";
import { GetStaticProps } from 'next';

type Post = {
  id: number;
  title: string;
  author: number;
  excerpt: string;
  content: string;
}

interface PostsProps {
  posts: Post[]
}


export default function Home({ posts }:PostsProps) {
  return (
    <>
      <Flex as="div">
        <Header/>
      </Flex>
      <Container maxW='container.md' p="12">
        <Heading as="h1">Ultimos posts</Heading>
        {posts.map((post) => (
          <Box
            key={post.id}
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop="6">
            <Heading marginTop="1">
              <Link _hover={{ textDecoration: 'none' }}>
                {post.title}
              </Link>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color="gray.600"
              fontSize="lg">
                {post.excerpt}
            </Text>
          </Box>
        ))}                
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await api.get('api')
  const posts = res.data
  console.log(res.data)

  return {
    props: {
      posts,
    },
  }
}