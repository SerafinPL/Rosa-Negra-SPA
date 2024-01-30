import { FunctionComponent } from 'react';
import { Flex, Text, Box, Link} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { projectBorder } from '../configLayout';
import { ImFacebook2 } from "react-icons/im";
import { PiInstagramLogoFill } from "react-icons/pi";


export const Contact: FunctionComponent = () => {
    return (
        <Flex id="kontakt" minH={`100vh`} w={{ base: '100%', md: "50%" }} 
        bg="transparent" style={projectBorder} 
        flexDirection='column' float='left' mt={37} pb={37}
        alignItems='flex-start' justifyContent={{ base: 'center', md: "flex-start" }} gap='7'>
            <Box w='100%'>
                //?? to components
                <Text fontSize={44} as='b'  pl='3%' >Kontakt<br /><br /></Text>
                <Text fontSize={23} pl='3%' as='b' lineHeight={1.69}>Adres</Text>
                <Text fontSize={23} fontWeight={400} pl='3%' lineHeight={1.69}>Ul. Piłsudskiego 81e<br /> 42-400 Zawiercie</Text>
                <Text fontSize={23} pl='3%' as='b' lineHeight={1.69}>Telefon</Text>
                <Text fontSize={23} fontWeight={400} pl='3%' lineHeight={1.69}><Link href="tel:500354004">500 354 004</Link></Text>
                <Text fontSize={23} pl='3%' as='b' lineHeight={1.69}>E-mail</Text>
                <Text fontSize={23} fontWeight={400} pl='3%' lineHeight={1.69}>kontakt@rosa-negra.pl<br /></Text>
            </Box>
            <Box w='100%'>
                <Text fontSize={23} as='b' p='3%'>Social Media<br /><br /></Text>
                <Link href='https://www.facebook.com/rosanegra.butik/' target='_blank' isExternal textDecoration='none!important'>
                <Text fontSize={23} fontWeight={400} pl='3%'>
                    <ImFacebook2 style={{ display: 'inline', fontSize: '32px'  }} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Text as='span' textDecoration='underline'>Facebook</Text>&nbsp;&nbsp;
                    <ExternalLinkIcon mx='2px' fontSize='sm' mb='13px'/><br /><br />
                </Text> 
                </Link>
                <Link href='https://www.instagram.com/rosanegra.butik/' target='_blank' isExternal textDecoration='none'>
                <Text fontSize={23} fontWeight={400} pl='3%' >
                    <PiInstagramLogoFill style={{ display: 'inline', fontSize: '32px' }} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Text as='span' textDecoration='underline'>Instagram</Text>&nbsp;&nbsp;
                    <ExternalLinkIcon mx='2px' fontSize='sm' mb='13px'/>
                </Text>
                </Link>
            </Box>
        </Flex>
    )
}