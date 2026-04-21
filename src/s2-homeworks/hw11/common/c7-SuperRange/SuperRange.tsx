import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ 
                borderRadius: "10px", 
                width: "147px;", 
                height: "4px", 
                color: "#0c2",
                '& .MuiSlider-rail': {
                    opacity: 1,
                    backgroundColor: '#8b8b8b',
                },

                '& .MuiSlider-track': {
                    border: 'none',
                    backgroundColor: '#0c2',
                },

                '& .MuiSlider-thumb': {
                    backgroundColor: '#fff',
                    border: '2px solid #0c2',
                    width: 18,
                    height: 18,
                    '&::before': {
                        content: '""',
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        backgroundColor: '#0c2',
                        position: 'absolute',
                    },
                },

                '& .MuiSlider-thumb.Mui-active': {
                    boxShadow: '0 0 0 8px rgba(0, 204, 34, 0.2)',
                },
            }}
            {...props} 
        />
    )
}

export default SuperRange
