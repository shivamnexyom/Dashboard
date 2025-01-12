import React from 'react';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

import Loader from '../Loader';
import './index.scss';

export default function ConfirmModal({
    showLoader = false,
    errorList = null,
    modalBaseClass = '',
    modalDescription = null,
    onClose,
    modalHeader,
    leftButtonText,
    leftButtonHandler,
    rightButtonText,
    rightButtonHandler,
    centerButtonHandler,
    centerBtnText,
}) {
    return (
        <Modal
            open
            classes={{ root: `confirmModalRoot ${modalBaseClass}` }}
            onClose={onClose}
            aria-labelledby="confirm-user-action-modal"
            aria-describedby="confirm-user-action-modal"
        >
            <section className="modalContent">
                {showLoader && <Loader />}
                <h2>
                    {modalHeader}
                    <IconButton aria-label="close" className="closeButton" onClick={onClose}>
                        <CloseIcon className="CloseIcon" alt="" />
                    </IconButton>
                </h2>
                {errorList ? (
                    <ul className="errorInfo">
                        {errorList.map((errorMessage, errIndex) => (
                            <li key={errIndex}>{errorMessage}</li>
                        ))}
                    </ul>
                ) : (
                    <React.Fragment>
                        {modalDescription && <div className="modalDescription">{modalDescription}</div>}
                    </React.Fragment>
                )}
                <div className="buttonWrap">
                    {leftButtonText && (
                        <Button className="leftButton" onClick={leftButtonHandler}>
                            {leftButtonText}
                        </Button>
                    )}
                    {centerBtnText && (
                        <Button className="leftButton" onClick={centerButtonHandler}>
                            {centerBtnText}
                        </Button>
                    )}
                    {rightButtonText && !errorList && (
                        <Button className="rightButton" onClick={rightButtonHandler}>
                            {rightButtonText}
                        </Button>
                    )}
                </div>
            </section>
        </Modal>
    );
}

ConfirmModal.propTypes = {
    errorList: PropTypes.array,
    modalBaseClass: PropTypes.string,
    modalDescription: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    modalHeader: PropTypes.string.isRequired,
    leftButtonText: PropTypes.string.isRequired,
    leftButtonHandler: PropTypes.func.isRequired,
    rightButtonText: PropTypes.string.isRequired,
    rightButtonHandler: PropTypes.func.isRequired,
    centerButtonHandler: PropTypes.func.isRequired,
    centerBtnText: PropTypes.string.isRequired,
};
