import { FunctionComponent } from 'react';

import { Text, Box, } from '@chakra-ui/react';
import { bigBorder, gradient } from '../configLayout';
import { MouseEventHandler } from 'react';

type RosaButtonProps = {
    text: string;
    link: string;
    click: MouseEventHandler;
}

const MenuButtonRosa: FunctionComponent<RosaButtonProps> = (props: RosaButtonProps) => {
    return (
        <Box color='brand' bgColor='brand.bananowy' borderBottom={bigBorder} w='100%'
            _hover={gradient}
            _active={gradient}>
            <a href={props.link} onClick={props.click}>
                <Text fontSize={44} fontWeight={900} as='b' p='5%' textAlign='center' display='block'>{props.text}</Text>
            </a>
        </Box>
    )
}

export default MenuButtonRosa