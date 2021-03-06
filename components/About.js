import { Box, Flex, Image, Text, List, ListItem, ListIcon, Heading, Grid } from "@chakra-ui/react";
import { IoCode, IoLogoJavascript, IoLogoNodejs, IoLogoReact, IoLogoPython } from 'react-icons/io5';
import { SiNextdotjs, SiCplusplus, SiSequelize, SiSolidity, SiTypescript, SiMongodb, SiGraphql, SiApollographql } from 'react-icons/si';
import { DiMysql } from 'react-icons/di';

const About = () => {
  return (
    <Box as="section" mt="2rem">
      <Flex gap="2rem" direction={{ base: "column", lg: "row" }}>
        <Box>
          <Text
            fontSize={"7rem"}
            fontWeight={"800"}
            maxW={{ base: "none", lg: "22rem" }}
            lineHeight={"6rem"}
          >
            About Me
          </Text>
        </Box>
        <Box flex="1" fontSize={{ base: "1rem", md: "1.3rem", xl: "1.7rem" }} lineHeight={{ base: "1.8rem", sm: "2rem", md: "3rem" }}>
          <Text>
            Hello! I am a starting Web developer based in Adelaide, Australia.
            Having graduated from the University of Adelaide with a Bachelor of
            Computer Science (Artificial Intellegence), and I hope to apply
            these skills to this space. I have only scratched the surface of
            what you can do with web development, but am eager to learn more and
            become proficient in the Full-stack. In future projects I am hoping
            to build some applications using web3 tools and technologies, so
            please look forward to them!
          </Text>
          <Text mt='1rem'>
            When I am not coding I love spending time with my dog Sabre, learning 
            about block-chain technologies, travelling and Snowboarding. The last 
            two have been difficult to do recently, so I have a very spoiled K9 at home. 
          </Text>
          <Text mt='1rem'>
            Thankyou for checking out my Portfolio, I hope you enjoy the projects I have completed so far! 
          </Text>
          <Flex gap={{base:'2rem', md: '4rem', lg: '7rem'}} mt="2rem" direction={{base: 'column', md: 'row'}}>
            <Box>
              <Heading as="h3">Experience With</Heading>
              <Grid as={List} templateColumns={{base: 'repeat(3, 1fr)', lg: 'repeat(2, 1fr)', xl:'repeat(3, 1fr)'}} gap={6} mt="1rem" fontSize={{ base: "1rem", md: "1.3rem", xl: "1.7rem" }}>
                <ListItem>
                  <ListIcon as={IoCode} />
                  HTML / CSS
                </ListItem>
                <ListItem>
                  <ListIcon as={IoLogoJavascript} />
                  Javascript
                </ListItem>
                <ListItem>
                  <ListIcon as={SiTypescript} />
                  Typescript
                </ListItem>
                <ListItem>
                  <ListIcon as={IoLogoReact} />
                  React
                </ListItem>
                <ListItem>
                  <ListIcon as={SiNextdotjs} />
                  Nextjs
                </ListItem>
                <ListItem>
                  <ListIcon as={IoLogoNodejs} />
                  Nodejs
                </ListItem>
                <ListItem>
                  <ListIcon as={DiMysql} />
                  SQL
                </ListItem>
                <ListItem>
                  <ListIcon as={SiSequelize} />
                  Sequelize
                </ListItem>
                <ListItem>
                  <ListIcon as={SiMongodb} />
                  MongoDB
                </ListItem>
                <ListItem>
                  <ListIcon as={SiGraphql} />
                  GraphQL
                </ListItem>
                <ListItem>
                  <ListIcon as={SiApollographql} />
                  Apollo
                </ListItem>
                <ListItem>
                  <ListIcon as={SiCplusplus} />
                  C++
                </ListItem>
                <ListItem>
                  <ListIcon as={IoLogoPython} />
                  Python
                </ListItem>
              </Grid>
            </Box>
            <Box>
              <Heading as="h3">Early Days</Heading>
              <List spacing={3} mt="1rem" fontSize={{ base: "1rem", md: "1.3rem", xl: "1.7rem" }}>
                <ListItem>
                  <ListIcon as={SiSolidity} />
                  Solidity
                </ListItem>
              </List>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default About;