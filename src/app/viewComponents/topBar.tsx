import { FunctionComponent } from 'react';

import Image from 'next/image';
import { Flex, Box, Spacer, IconButton, Text, Button } from '@chakra-ui/react';
import { GiHamburgerMenu } from "react-icons/gi";
import { heightBar } from '../configLayout';
import MiniMenuButtonRosa from './miniMenuButtonRosa';

import roza from '../../../public/logorn.png';
import napis from '../../../public/rosanegralogotyp.png';

type AppProps = {
  drawer: boolean;
  setOpen: () => void;
}

export const TopBar:FunctionComponent<AppProps> = (props: AppProps) => {

  const imgStyle = { backgroundColor: 'transparent' };
  const closeSize = 34;

  const openDrawer = () => {
    props.setOpen();
  }

  return (
    <Flex h={`${heightBar}`} pb='5px'>
      <Box pl='4' display="flex" alignItems="center" justifyContent="center">
        <Image src={roza} alt='logo' width={41} height={41} style={imgStyle} />
      </Box>
      <Spacer />
      <Box p='4' display="flex" alignItems="center" justifyContent="center">
        <Image src={napis} alt='text logo' height={33} style={imgStyle} />
      </Box>
      <Spacer />
      <MiniMenuButtonRosa text='o nas' link='#info' />
        <MiniMenuButtonRosa text='kontakt' link='#kontakt' />
      <Box m={1} display={{base: 'flex', md:'none'}} alignItems="center" justifyContent="center" w={closeSize} h={closeSize} pt={2} pr={2} >        
        <IconButton aria-label='Menu'
          bg='brand.500'
          color="brand.bananowy"
          // variant='ghost'
          icon={<GiHamburgerMenu style={{ width: '22px', height: '22px' }} />}
          _hover={{ bg: 'brand.500' }}
          _active={{ bg: 'brand.500' }}
          borderRadius='25px' border='0px'
          w={closeSize} h={closeSize}
          size='sm'
          onClick={openDrawer}
        />
      </Box>
    </Flex>
  )
}
