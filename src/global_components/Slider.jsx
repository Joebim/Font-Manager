import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: '',
  },
  {
    value: 20,
    label: '',
  },
  {
    value: 40,
    label: '',
  },
  {
    value: 60,
    label: '',
  },
  {
    value: 80,
    label: '',
  },
  {
    value: 100,
    label: '',
  },
];

function valuetext(props) {
  return `${props}°C`;
}

export default function DiscreteSliderMarks() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Custom marks"
        defaultValue={20}
        getAriaValueText={valuetext}
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  );
}
