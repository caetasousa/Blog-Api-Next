import { Header } from "../components/Header";
import { Flex, Box, Container, Heading, Text, Link as Lin } from "@chakra-ui/react"
import { api } from "../services/api";
import { GetStaticProps } from 'next';
import Link from 'next/link';

type Post = {
  id: number;
  title: string;
  author: number;
  category: number;
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
              <Link key={post.id} href={`/posts/${post.id}`}>
                <Lin _hover={{ textDecoration: 'none' }}              >
                  {post.title}
                </Lin>
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
  const res = await api.get('api/')

  const posts = res.data

  return {
    props: {
      posts,
    },
  }
}