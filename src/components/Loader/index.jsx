import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import loader from './loader.svg';

export default function Loader({ backgroundColor = 'transparent', position = 'absolute' }) {
    const style = {
        position,
        height: '100%',
        width: '100%',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor,
        zIndex: 99,
    };
    const imgStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'Translate(-50%, -50%)',
    };
    const whiteBg = {
        position: 'absolute',
        height: '100%',
        width: '100%',
        background: '#ffffff',
        opacity: '0.6',
    };
    return (
        <Box classes={{ root: 'loader' }} data-testid="loader" style={style}>
            <div style={whiteBg} />
            <img src={loader} style={imgStyle} alt="loading" />
        </Box>
    );
}

Loader.propTypes = {
    backgroundColor: PropTypes.string,
    position: PropTypes.string,
};
