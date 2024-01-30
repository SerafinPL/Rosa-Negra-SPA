
import { Flex, Text } from '@chakra-ui/react';
import { projectBorder, bigBorder } from '../configLayout';

export const MapingSector: React.FunctionComponent = () => {

  return (
    <Flex id='dojazd' className="float-left" minH={`100vh`}
      w={{ base: '100%', md: "50%" }}
      bg="transparent" style={projectBorder}
      flexDirection='column' mt={37} pb={37}
      alignItems='flex-start' justifyContent={{ base: 'center', md: "flex-start" }} gap='7'>
      <Text fontSize={44} as='b' pl='3%' >Dojazd<br /><br /></Text>
      <iframe width="94%" height="450" src="https://www.openstreetmap.org/export/embed.html?bbox=19.430986940860752%2C50.49033033502296%2C19.435466229915622%2C50.49189341187368&amp;layer=mapnik&amp;marker=50.49111187991239%2C19.433226585388184"
        style={{ border: bigBorder, margin: '0% 3%' }}>
      </iframe>
      <Text fontSize='sm' w='100%' textAlign='center'><a target='_blank' href="https://www.google.com/maps/dir//Rosa+Negra,+J%C3%B3zefa+Pi%C5%82sudskiego+81e,+42-400+Zawiercie/@50.4913644,19.4316929,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4717236e03937ef5:0x50140443aab9a475!2m2!1d19.4331789!2d50.4910688!3e0?entry=ttu">Ustaw nawigacje w Google Maps</a></Text>
      <Text fontSize='sm' w='100%' textAlign='center'><a target='_blank' href="https://www.openstreetmap.org/?mlat=50.49111&amp;mlon=19.43323#map=19/50.49111/19.43323">Wyświetl większą mapę</a></Text>
    </Flex>
  )
}

