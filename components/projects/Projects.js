import { Grid, Heading, Box, Text, Fade } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

// temp holding place for project data -> currently figuring out best solution for this
let projects = require("../../data/projects.json");
let hero = projects[0];
let otherProjects = projects.slice(1);

const Projects = (props) => {
  return (
    <section>
      {/* Grid Section */}
      <Grid
        gap="1rem"
        templateRows="1fr"
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
        ]}
        mt="2rem"
      >
        {/* Heading title */}

        <Box
          as={motion.div}
          gridColumn={[1, 1, 2]}
          gridRowStart={1}
          gridRowEnd={2}
          alignSelf="top"
          justifySelf={"center"}
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 10 }}
        >
          <Heading
            as="h2"
            fontSize={["4rem", "5rem", "6rem", "7rem", "9rem"]}
            display={"flex"}
            flexDirection={["row", "row", "row", "column"]}
            lineHeight={["6rem", "7rem"]}
          >
            <Text as={"span"}>Pro</Text>
            <Text as={"span"}>jects</Text>
          </Heading>
        </Box>

        {/* Hero Project */}
        <Box gridRowStart={[2, 2, 1]} gridRowEnd={[2, 2, 3]} gridColumn={1}>
          <ProjectCard
            image={hero.image}
            title={hero.title}
            description={hero.description}
            technologies={hero.technologies}
            website={hero.website}
            github={hero.github}
          />
        </Box>

        {/* Remaining Projects */}
        {otherProjects.map((project) => (
          <ProjectCard
            image={project.image}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            website={project.website}
            github={project.github}
            key={project.id}
          />
        ))}
      </Grid>
    </section>
  );
};

export default Projects;
