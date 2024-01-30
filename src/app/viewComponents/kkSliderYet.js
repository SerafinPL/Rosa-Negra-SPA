
'use client'

import { useState, useRef } from "react";

import {
  Box, RadioGroup, Stack, Radio
} from '@chakra-ui/react';

import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";

import { viewHeightWithoutBarAndBorder, projectBorder } from '../configLayout';

const viewHeightWithOutBarMinus80 = `calc(${viewHeightWithoutBarAndBorder} - 2rem ) `;

const YetSlider = props => {

  const ref = useRef(null);
  const [index, setIndex] = useState(0);

  const updateIndex = ({ index: current }) => setIndex(current);
  const slideChange = (ratio) => {

    let stageRatio = ratio;
    while (stageRatio < index) {
      ref.current.prev();
      ++stageRatio;
    }

    while (stageRatio > index) {
      ref.current.next();
      --stageRatio;
    }
  };

  const radioStack = props.slidersArr.map((slide, slideIndex) => {


    return (<Radio color='brand.500' colorScheme='brand' bg='brand.bananowy' borderColor='brand.500'
      _checked={{
        bg: 'brand.500',
        color: 'brand.500',
        borderColor: 'brand.500',
      }}
      value={slideIndex}
      onClick={() => slideChange(slideIndex - 1)}
      key={`radioSlider${++slideIndex}`} />)
  })

  return (<Box h={viewHeightWithoutBarAndBorder} display="flex" alignItems="center" justifyContent="space-evenly"
    pb='2rem' overflow='hidden' flexDirection='column'
    style={Object.assign({ padding: '1em' }, projectBorder)}>
    <Lightbox
      plugins={[Inline, Slideshow]}
      styles={{ container: { backgroundColor: 'transparent', height: '100%' } }}
      index={index}
      slides={props.slidersArr}
      on={{
        view: updateIndex,
      }}
      carousel={{
        preload: 7,
        padding: 0,
        spacing: 0,
        imageFit: "contain",
      }}
      inline={{
        style: {
          width: "100%",
          height: "100%",
          margin: "0 auto",
          backgroundColor: 'transparent'
        },
      }}
      controller={{ ref }}
      slideshow={{
        autoplay: true,
        delay: 2700,
      }}
      render={{
        buttonPrev: () => null,
        buttonNext: () => null,
        buttonSlideshow: () => null,
      }}
    />
    <Box display="flex" alignItems="center" justifyContent="center">
      <RadioGroup p={'2rem'} value={index}>
        <Stack spacing={5} direction='row'>
          {radioStack}
        </Stack>
      </RadioGroup>
    </Box>
  </Box>)
}

export default YetSlider;