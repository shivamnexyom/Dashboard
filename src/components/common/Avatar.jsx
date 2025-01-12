import React from 'react';
import PropTypes from 'prop-types';

const lightColors = ['#F0E68C', '#E0FFFF', '#FFB6C1', '#FFFACD', '#B0E0E6', '#FFDAB9'];

function hashCode(s) {
    let hash = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
    }
    return hash;
}

function getRandomLightColor(s) {
    const hash = hashCode(s);
    // Use the absolute value of the hash to ensure a positive number, then map it to 0-5
    const randomNumber = Math.abs(hash) % 6;
    return lightColors[randomNumber];
}

const Avatar = ({ img, name, width = 48, height = 48 }) => {
    return img ? (
        <img src={img} width={width} height={height} style={{ borderRadius: '50%' }} />
    ) : (
        <div
            style={{
                height,
                width,
                background: getRandomLightColor(name),
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: `${width / 2.5}px`,
                lineHeight: `${width / 2.5}px`,
                textTransform: 'uppercase',
                fontWeight: 600,
            }}
        >
            {name}
        </div>
    );
};

export default Avatar;

Avatar.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
};
