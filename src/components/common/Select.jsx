import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InputLabel from '@mui/material/InputLabel';
import c from 'classnames';

const MenuItemWrap = styled(({ displayProp, ...rest }) => displayProp && <MenuItem {...rest} />)`
    display: ${({ displayProp }) => `${displayProp}`};
`;

export const CustomSelect = ({
    id = 'selectId',
    answer = '',
    question_text = '',
    options = [],
    handleChange = () => {},
    showLabel = true,
    fullWidth = false,
    disabled = false,
}) => {
    const selectClass = c('selectWrap', {
        emptySelect: !answer,
    });

    return (
        <div className={selectClass}>
            {showLabel && (
                <InputLabel id={id} htmlFor={`${id}-select`}>
                    {question_text}
                </InputLabel>
            )}
            <Select
                displayEmpty
                disabled={disabled}
                fullWidth={fullWidth}
                id={`${id}-select`}
                labelId={id}
                value={answer}
                IconComponent={ExpandMoreIcon}
                MenuProps={{
                    anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
                    transformOrigin: { vertical: 'top', horizontal: 'left' },
                    classes: { paper: 'userOptionsPaper' },
                }}
                onChange={({ target }) => handleChange(target.value)}
                aria-labelledby={id}
                aria-label={question_text}>
                {options.map(({ key = '', value = '' }, index) => (
                    <MenuItemWrap
                        key={`${id}-${index}`}
                        classes={{ root: 'userOptions' }}
                        value={value}
                        displayProp="flex">
                        <span className="key">{key}</span>
                    </MenuItemWrap>
                ))}
            </Select>
        </div>
    );
};

CustomSelect.propTypes = {
    id: PropTypes.string,
    answer: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    question_text: PropTypes.string,
    select_option_text: PropTypes.string,
    showLabel: PropTypes.bool,
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                .isRequired,
        })
    ),
    handleChange: PropTypes.func,
};

CustomSelect.defaultProps = {
    id: 'selectId',
    answer: '',
    question_text: '',
    options: [],
    handleChange: () => {},
    showLabel: true,
    fullWidth: false,
    disabled: false,
};
