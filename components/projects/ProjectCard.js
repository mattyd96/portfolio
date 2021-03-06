import { Box, Button, Grid, Heading, Flex, Spacer, Icon, Text, Image, useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion"
import { GoMarkGithub } from "react-icons/go";
import { MdOpenInBrowser } from "react-icons/md";

import ProjectDrawer from "./ProjectDrawer";
import classes from "./ProjectCard.module.css";
import { Fragment } from "react";

// helper -> opens link to site in a new tab
const gotoSite = site => {
  window.open(site, "_blank");
}

const ProjectCard = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Fragment>
      <Box
        as={motion.div}
        display={'grid'}
        className={classes.card}
        minH={"17rem"}
        height={'100%'}
        boxShadow="2xl"
        rounded='md'
        overflow={'hidden'}
        templateColumns="1fr"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 20 }}
        onClick={onOpen}
      >
        <Image
          src={props.image}
          alt={props.title}
          gridColumn={1}
          gridRow={1}
          boxSize="100%"
          objectFit="cover"
          zIndex={1}
          placeholder='blur'
        />
        
        <Flex
          className={classes.info}
          gridColumn={1}
          gridRow={1}
          zIndex={2}
          height='100%'
          direction={'column'}
          display={'none'}
        >
          <Heading
            as="h3"
            fontSize={['2rem', '3rem', '2rem', '2rem', '2rem', '2.7rem']}
            color='#fff'
          >
            {props.title}
          </Heading>
        </Flex>
      </Box>
      <ProjectDrawer {...props} gotoSite={gotoSite} isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Fragment>
  );
};

export default ProjectCard;
