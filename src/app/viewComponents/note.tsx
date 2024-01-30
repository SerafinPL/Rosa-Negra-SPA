import { FunctionComponent } from 'react';

import { Flex, Text } from '@chakra-ui/react';
import { projectBorder } from '../configLayout';

export const Note: FunctionComponent = () => {

  return (
    <Flex id="info"  minH={`75vh`} bg="brand.bananowy" style={projectBorder} flexDirection='column' alignItems='flex-start' justifyContent='center' >
      <Text  fontSize={23} as='b' p='3%'>Rosa Negra to ekskluzywny butik z odzieżą damską.</Text>
      <Text fontSize={19} p='3%' fontWeight={400} lineHeight={1.27}>
        Współpracujemy tylko ze starannie wyselekcjonowanymi, mało znanymi na polskim rynku markami jakości premium.<br/><br/>

        To dlatego, by umożliwić stylowym kobietom dostęp do najbardziej oryginalnych i ekstrawaganckich ubrań w jednym miejscu.<br/><br/>

        Stawiamy przede wszystkim na unikatowość oraz wysoką jakość naszych produktów.<br/><br/>
      </Text>
    </Flex>
  )
}
