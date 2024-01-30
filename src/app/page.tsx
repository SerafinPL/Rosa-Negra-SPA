'use client'

import { Grid, GridItem, Box,useDisclosure } from '@chakra-ui/react';
import { Note } from './viewComponents/note';
import { heightBar,projectBorder } from "./configLayout";
import { TopBar } from './viewComponents/topBar';
import DrawerRosa from './viewComponents/drawer';
import Slider from './viewComponents/SliderComnonent'
import { MapingSector } from './viewComponents/map';
import { Contact } from './viewComponents/contact';

export default function Home() {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <main>
      <Grid
        templateAreas={`"header header"
                        "main main"`}
        gridTemplateRows={`${heightBar} 1fr`}
        gridTemplateColumns={'1fr '}
        gap='0'
        fontWeight='bold'
        style={{ maxHeight: '100vh', overflow: 'hidden' }}
      >
        <GridItem bg="brand.bananowy" area={'header'} style={projectBorder}>
          <TopBar drawer={isOpen} setOpen={onOpen} />
        </GridItem>

        <GridItem bg='green.300' area={'main'} overflowY='auto' overflowX='hidden'
          bgGradient='linear(to-r, brand.blekit, brand.bananowy, brand.blekit)'
          style={{ width: '100%', }}
        >
          <DrawerRosa isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
          <Slider />
          <Note />
          <Box bgGradient='linear(to-b, brand.bananowy, brand.blekit)' display='block'>
            <Contact />
            <MapingSector />
          </Box>
        </GridItem>

      </Grid>
    </main>
  )
}
