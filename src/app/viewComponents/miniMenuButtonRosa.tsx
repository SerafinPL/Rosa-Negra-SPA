import { FunctionComponent } from 'react';

import { Text, Box, } from '@chakra-ui/react';
import { gradient } from '../configLayout';

type MiniButtonProps = {
    text: string;
    link: string;
}

const MiniMenuButtonRosa: FunctionComponent<MiniButtonProps> = (props: MiniButtonProps) => {
    return (
        <Box color='brand' bgColor='brand.bananowy' w='31%' textAlign='center' style={{ cursor: 'pointer' }}
            display={{ base: 'none', md: 'block' }}
            _hover={gradient}
            _active={gradient}
        >
            <Text fontSize={31} fontWeight={900} as='b' p='5%' display='inline' w='100%'><a href={props.link}>{props.text}</a></Text>
        </Box>
    )
}

export default MiniMenuButtonRosa