import { FunctionComponent } from 'react';

import YetSlider from "./kkSliderYet.js";
import { useBreakpointValue } from '@chakra-ui/react';

import wide1 from '../../../public/s1.png';
import wide2 from '../../../public/s2.png';
import wide3 from '../../../public/s3.png';

import slim1 from '../../../public/SM1.png';
import slim2 from '../../../public/SM2.png';
import slim3 from '../../../public/SM3.png';

const slidesArr = [wide1, wide2, wide3];
const slidesArrSlim = [slim1, slim2, slim3];

const Slider: FunctionComponent = () => {

    const variant = useBreakpointValue(
        {
            base: slidesArrSlim,
            md: slidesArr,
        }
    )

    return (<div><YetSlider slidersArr={variant} /></div>);
}

export default Slider
