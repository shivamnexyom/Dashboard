import * as React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function PasswordField({ name, value, fullWidth, onChange, placeholder, inputProps }) {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <OutlinedInput
            name={name}
            value={value}
            fullWidth={fullWidth}
            onChange={onChange}
            placeholder={placeholder}
            inputProps={inputProps}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
                value ? (
                    <InputAdornment position="end">
                        <IconButton
                            data-testid="eye-icon"
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                ) : null
            }
            label="Password"
        />
    );
}

PasswordField.propTypes = {
    name: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
    fullWidth: PropTypes.any.isRequired,
    onChange: PropTypes.any.isRequired,
    placeholder: PropTypes.any.isRequired,
    inputProps: PropTypes.any.isRequired,
};
