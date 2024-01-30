import { FunctionComponent } from 'react';

import Image from 'next/image';

import {
    Drawer, DrawerBody, Box, Flex,
    DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton,
} from '@chakra-ui/react';

import roza from '../../../public/logorn.png';
import { bigBorder } from '../configLayout';
import MenuButtonRosa from './menuButton';
import { IoMdCloseCircle } from "react-icons/io";

type DrawerProps = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const DrawerRosa: FunctionComponent<DrawerProps> = (props: DrawerProps) => {

    const heightOfSpace = `3px`;
    const closeSize = '43px';

    return (
        <Drawer
            isOpen={props.isOpen}
            placement='right'
            onClose={props.onClose}
            size={'full'}
            
        >
            <DrawerOverlay />
            <DrawerContent bgColor='brand.bananowy'>
                <DrawerHeader border={bigBorder} pt={0} p={0} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IoMdCloseCircle onClick={props.onClose} style={{ display: 'inline', width: closeSize, height: closeSize }} />                    
                </DrawerHeader>
                <DrawerBody  m={0} p={0}>
                    <Flex border={bigBorder} borderTopWidth='0px' h='100%' overflow={'hidden'}>
                        <Box w='17%' h='100%' borderRight={bigBorder} bgColor='brand.blekit'></Box>
                        <Flex align="center" justify="center" flexDirection='column' h='100%' w='83%' >
                            <MenuButtonRosa text='o nas' link='#info' click={props.onClose} />
                            <MenuButtonRosa text='kontakt' link='#kontakt' click={props.onClose} />
                            <MenuButtonRosa text='dojazd' link='#dojazd' click={props.onClose} />
                            <Flex align="center" justify="center" flexGrow={5}>
                                <Image src={roza} alt='logo'  style={{ display: 'inline', width:'auto', height:'auto' }} />
                            </Flex>
                        </Flex>
                    </Flex>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export default DrawerRosa