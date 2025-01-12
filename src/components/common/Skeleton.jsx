import * as React from 'react';
import PropTypes from 'prop-types';
import MUISkeleton from '@mui/material/Skeleton';

export default function Skeleton({ variant = 'rectangular', height = 40, width = 40, sx }) {
    return (
        <MUISkeleton
            variant={variant}
            color="#EDF3F6"
            height={height}
            width={width}
            sx={{ borderRadius: height / 2, background: '#EDF3F6', ...sx }}
        />
    );
}

Skeleton.propTypes = {
    variant: PropTypes.string,
    sx: PropTypes.any,
    width: PropTypes.any,
    height: PropTypes.any,
};
