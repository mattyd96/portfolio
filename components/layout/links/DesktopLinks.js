import NextLink from "next/Link"
import { HStack, Link, Button, useColorMode, useDisclosure } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const DesktopLinks = props => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack spacing='1rem' display={['none','none','block','block']}>
      <NextLink href='/' passHref>
        <Link>Home</Link>
      </NextLink>
      <NextLink href='/about' passHref>
        <Link>About Me</Link>
      </NextLink>
      <NextLink href='/projects' passHref>
        <Link>Projects</Link>
      </NextLink>
      <Link onClick={props.onOpen}>Contact</Link>
      <Link onClick={props.gotoResume}>Resume</Link>
      <Button onClick={toggleColorMode}>{colorMode == 'light' ? <MoonIcon /> : <SunIcon />}</Button>
    </HStack>
  );
};

export default DesktopLinks;